import "./Admin.css";

interface PlayerTable {
  id: string;
  name: string;
  status: boolean;
}

export function Admin() {
  const otp = "123456";
  const players: PlayerTable[] = [
    { id: "1asdad2", name: "Test1", status: true },
    { id: "123dadads", name: "Test2", status: false },
    { id: "12sdada2", name: "Test3", status: true },
  ];
  const handleCopy = () => {
    navigator.clipboard
      .writeText(otp)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        console.log("Failed to copy text: " + err);
      });
  };
  return (
    <>
      <div className="admin-container">
        <div className="admin-details-container">
          <div className="admin-title">ADMIN</div>
          <div className="otp-container">
            <div className="otp-title">OTP</div>
            <div className="otp">{otp}</div>
            <div
              className="fa fa-copy copy-btn"
              title="copy"
              onClick={handleCopy}
            ></div>
          </div>
          <button className="reset-btn">RESET</button>
          <div className="table-container">
            <table className="player-table">
              <thead className="player-table-header">
                <tr>
                  <th>No.</th>
                  <th>Player</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="player-table-body">
                {players.map((p, index) => (
                  <tr id={`player-detail-${index}`} key={p.id}>
                    <td>{index + 1}</td>
                    <td>{p.name}</td>
                    <td>
                      {p.status ? (
                        <>
                          <div className="green"></div>
                        </>
                      ) : (
                        <>
                          <div className="red"></div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
