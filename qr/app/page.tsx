export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-200 rounded-xl">
      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center">
        <img 
          className="border rounded-lg m-2" 
          src="/image-qr-code.png" 
          alt="Title" 
          width="300 "
          height="300 "
        />
        <div className="text-center">
          <h4 className="text-lg font-bold mb-4">Improve your front-end<br/>skills by building projects</h4>
          <p className="text-gray-600">Scan the QR code to visit Frontend <br></br> Mentor
          and take your coding skills to <br></br> the next level
          </p>
        </div>
      </div>
    </main>
  );
}
