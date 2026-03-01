export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
        <p className="font-medium text-gray-800">Disclaimer</p>
        <p className="mt-1">
          This test is designed for guidance purposes only. Final career decisions should be taken
          after discussing with parents/teachers or a professional career counselor.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Nishaglobal Education</p>
      </div>
    </footer>
  );
}
