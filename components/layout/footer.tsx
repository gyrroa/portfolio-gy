export default function Footer() {
  return (
    <footer className="py-6 bg-black text-center text-gray-400">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  )
}

