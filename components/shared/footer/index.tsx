const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t st w-full">
      <div className="p-5 flex-center text-sm">
        {currentYear} CREW. All rights Reserved ©
      </div>
    </footer>
  );
};

export default Footer;
