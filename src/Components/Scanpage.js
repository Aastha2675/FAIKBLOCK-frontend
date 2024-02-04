import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useState } from "react";
import "./Scanpage.css";

const Scanpage = () => {
  const [ScanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className="scanner-container">
        {ScanResult ? (
          <div>
            {ScanResult}
            {/* data is displayed from backend in this div */}
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </>
  );
};

export default Scanpage;
