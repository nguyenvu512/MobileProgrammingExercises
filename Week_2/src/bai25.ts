//Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
export function downloadFile(filename: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`⏳ Bắt đầu tải file: ${filename}...`);
    setTimeout(() => {
      console.log(`✅ File "${filename}" đã tải xong!`);
      resolve();
    }, 3000); // 3000ms = 3 giây
  });
}
