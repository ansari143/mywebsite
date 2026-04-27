"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GovPracticeSet, GovPracticeCategory } from "@/data/practiceTests";

type Props = {
  categorySlug: string;
  categoryTitle: string;
  set: GovPracticeSet;
  categoryData?: GovPracticeCategory;
};

export default function PracticeQuiz({ categorySlug, categoryTitle, set, categoryData }: Props) {
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [navigatorPage, setNavigatorPage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const [language, setLanguage] = useState<"en" | "hi" | "both">("en");

  const otherLiveSets = categoryData?.sets.filter(s => s.isLive && s.slug !== set.slug) || [];

  const questions = useMemo(() => set.questions || [], [set.questions]);
  const total = questions.length;
  const isLongQuiz = total > 40;
  const navigatorSize = isLongQuiz ? 25 : total;
  const totalNavigatorPages = Math.max(1, Math.ceil(total / navigatorSize));
  const reviewPageSize = 20;
  const totalReviewPages = Math.max(1, Math.ceil(total / reviewPageSize));
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === total;

  const currentQuestion = questions[currentQuestionIndex];

  const currentNavigatorQuestions = useMemo(() => {
    const start = (navigatorPage - 1) * navigatorSize;
    return questions.slice(start, start + navigatorSize);
  }, [navigatorPage, navigatorSize, questions]);

  const currentReviewQuestions = useMemo(() => {
    const start = (reviewPage - 1) * reviewPageSize;
    return questions.slice(start, start + reviewPageSize);
  }, [questions, reviewPage]);

  const result = useMemo(() => {
    if (!submitted) return null;
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correct) {
        correct += 1;
      }
    }
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { correct, percent };
  }, [submitted, answers, questions, total]);

  const handleAnswer = (questionId: string, answer: "A" | "B" | "C" | "D") => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (allAnswered) {
      setSubmitted(true);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentQuestionIndex(0);
    setNavigatorPage(1);
    setReviewPage(1);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    const page = Math.floor(index / navigatorSize) + 1;
    setNavigatorPage(page);
  };

  if (!questions.length) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-center text-slate-600">No questions available for this set.</p>
      </div>
    );
  }

  if (submitted && result) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-slate-900">Quiz Complete!</h2>
          <p className="mt-2 text-lg text-slate-600">
            You scored {result.correct} out of {total} ({result.percent}%)
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleRetry}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Retry Quiz
            </button>
            <Link
              href={`/practice-tests/${categorySlug}`}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-slate-700 hover:bg-gray-50 text-center"
            >
              Back to {categoryTitle} Practice
            </Link>
            <Link
              href="/practice-tests"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-slate-700 hover:bg-gray-50 text-center"
            >
              All Practice Tests
            </Link>
          </div>
          {otherLiveSets.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Try Another Set</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {otherLiveSets.slice(0, 3).map((otherSet) => (
                  <Link
                    key={otherSet.slug}
                    href={`/practice-tests/${categorySlug}/${otherSet.slug}`}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50"
                  >
                    {otherSet.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Review Answers</h3>
          {isLongQuiz && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-700">
                  Reviewing questions {(reviewPage - 1) * reviewPageSize + 1} to {Math.min(reviewPage * reviewPageSize, total)} of {total}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setReviewPage(Math.max(1, reviewPage - 1))}
                    disabled={reviewPage === 1}
                    className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-white disabled:opacity-50"
                  >
                    Previous Page
                  </button>
                  <span className="text-sm font-medium text-slate-700">
                    Page {reviewPage} of {totalReviewPages}
                  </span>
                  <button
                    onClick={() => setReviewPage(Math.min(totalReviewPages, reviewPage + 1))}
                    disabled={reviewPage === totalReviewPages}
                    className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-white disabled:opacity-50"
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>
          )}
          {currentReviewQuestions.map((q, index) => {
            const userAnswer = answers[q.id];
            const questionNumber = (reviewPage - 1) * reviewPageSize + index + 1;
            return (
              <div key={q.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">
                      Question {questionNumber}
                    </h4>
                    <p className="mt-2 text-slate-700">
                      {language === "hi" ? q.hi : language === "en" ? q.text : `${q.text} (${q.hi})`}
                    </p>
                    <div className="mt-4 space-y-2">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`rounded-lg border p-3 ${
                            opt.id === q.correct
                              ? "border-green-500 bg-green-50"
                              : opt.id === userAnswer
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200"
                          }`}
                        >
                          <span className="font-medium">{opt.id}.</span>{" "}
                          {language === "hi" ? opt.hi : language === "en" ? opt.text : `${opt.text} (${opt.hi})`}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-slate-600">
                      <strong>Explanation:</strong>{" "}
                      {language === "hi" ? q.explanationHi : language === "en" ? q.explanation : `${q.explanation} (${q.explanationHi})`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">
            {set.title} - {categoryTitle}
          </h1>
          {set.bilingual && (
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-lg px-3 py-1 text-sm ${
                  language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`rounded-lg px-3 py-1 text-sm ${
                  language === "hi" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Hindi
              </button>
              <button
                onClick={() => setLanguage("both")}
                className={`rounded-lg px-3 py-1 text-sm ${
                  language === "both" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Both
              </button>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
          <span>Question {currentQuestionIndex + 1} of {total}</span>
          <span>Answered: {answeredCount}/{total}</span>
          {isLongQuiz && <span>Navigator Page: {navigatorPage}/{totalNavigatorPages}</span>}
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Question {currentQuestionIndex + 1}
        </h2>
        <p className="mt-4 text-lg text-slate-700">
          {language === "hi" ? currentQuestion.hi : language === "en" ? currentQuestion.text : `${currentQuestion.text} (${currentQuestion.hi})`}
        </p>
        <div className="mt-6 space-y-3">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(currentQuestion.id, opt.id)}
              className={`w-full rounded-lg border p-4 text-left transition-colors ${
                answers[currentQuestion.id] === opt.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="font-medium">{opt.id}.</span>{" "}
              {language === "hi" ? opt.hi : language === "en" ? opt.text : `${opt.text} (${opt.hi})`}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => jumpToQuestion(Math.max(0, currentQuestionIndex - 1))}
          disabled={currentQuestionIndex === 0}
          className="rounded-xl border border-gray-300 px-4 py-2 font-semibold text-slate-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex flex-wrap gap-2 justify-center">
          {currentNavigatorQuestions.map((question, localIndex) => {
            const index = (navigatorPage - 1) * navigatorSize + localIndex;
            return (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`h-8 w-8 rounded-full text-sm ${
                index === currentQuestionIndex
                  ? "bg-blue-600 text-white"
                  : answers[question.id]
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
            );
          })}
        </div>
        <button
          onClick={() => jumpToQuestion(Math.min(total - 1, currentQuestionIndex + 1))}
          disabled={currentQuestionIndex === total - 1}
          className="rounded-xl border border-gray-300 px-4 py-2 font-semibold text-slate-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {isLongQuiz && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-700">
              Showing question buttons {(navigatorPage - 1) * navigatorSize + 1} to {Math.min(navigatorPage * navigatorSize, total)}.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setNavigatorPage(Math.max(1, navigatorPage - 1))}
                disabled={navigatorPage === 1}
                className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-white disabled:opacity-50"
              >
                Prev Buttons
              </button>
              <span className="text-sm font-medium text-slate-700">
                Page {navigatorPage} of {totalNavigatorPages}
              </span>
              <button
                onClick={() => setNavigatorPage(Math.min(totalNavigatorPages, navigatorPage + 1))}
                disabled={navigatorPage === totalNavigatorPages}
                className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-white disabled:opacity-50"
              >
                Next Buttons
              </button>
            </div>
          </div>
        </div>
      )}

      {allAnswered && (
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <p className="text-slate-600">All questions answered. Ready to submit?</p>
          <button
            onClick={handleSubmit}
            className="mt-4 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
}