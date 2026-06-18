const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lichen. All rights reserved. Develop
        by{" "}
        <a
          href="abdelrahman-lichi.vercel.app"
          className="text-blue-500 hover:underline"
        >
          Abdelrahman Lichi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
