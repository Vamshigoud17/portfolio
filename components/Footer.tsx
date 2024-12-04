const Footer = () => {
  return (
    <footer className="bg-background text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Burra Vamshi. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="https://linkedin.com/in/vamshi-burra-54b8482a7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/Vamshigoud17" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
              GitHub
            </a>
            <a href="https://drive.google.com/file/d/15JgPxCEVrs7WJKdOHNc82nU-OL6piFtq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

