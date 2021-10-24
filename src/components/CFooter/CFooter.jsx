const CFooter = () => {
  return (
    <footer className="text-gray-600 body-font xl:px-20 lg:px-20 md:px-2 sm:px-2" style={{ backgroundColor: "white" }}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              FACEBOOK
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              YOUTUBER
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 sm:mb-10">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:
            <a
              href="https://www.tailwind-elements.com/"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Nguyen Huy Thang - Ninh Ngoc Hieu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default CFooter;
