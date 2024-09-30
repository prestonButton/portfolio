const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full absolute bottom-0 left-0 border border-red-600">
      <p className="text-gray-500 text-xs">
        © {currentYear} - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
