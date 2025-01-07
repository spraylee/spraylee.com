export default function Footer() {
  // 暂时隐藏，等备案号下来再显示
  return null;
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          浙ICP备XXXXXXXX号-1
        </a>
      </div>
    </footer>
  );
}
