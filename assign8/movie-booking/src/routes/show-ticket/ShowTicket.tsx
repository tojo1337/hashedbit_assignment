import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store";

function ShowTicket() {
    const navigate = useNavigate();
    const ticketDetails = useSelector((state: RootState)=>state.ticket.ticketDetails);

    function returnHome() {
        navigate("/");
    }

    return (
        <div className="show-ticket">
            <div className="container">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Name : </th>
                            <td>{ticketDetails.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Screen : </th>
                            <td>{ticketDetails.movieScreen}</td>
                        </tr>
                        <tr>
                            <th scope="row">BookId : </th>
                            <td>{ticketDetails.bookingId}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email : </th>
                            <td>{ticketDetails.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone : </th>
                            <td>{ticketDetails.mobile}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-center align-item-center">
                    <button className="btn btn-outline-primary" onClick={returnHome}>Return</button>
                </div>
            </div>
        </div>
    )
}

export {
    ShowTicket
}