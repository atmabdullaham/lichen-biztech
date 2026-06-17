const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lichen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
