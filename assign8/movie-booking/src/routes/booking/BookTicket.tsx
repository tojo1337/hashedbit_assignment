import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import { TicketInfo, setTicket } from "../../store/ticetSlice";

function BookTicket() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movieDetails = useSelector((state: RootState)=>state.ticket.movieDetails);
    const ticketDetails = useSelector((state: RootState)=>state.ticket.ticketDetails);

    function formHandle(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let target = e.currentTarget;
        let fromData = new FormData(target);
        let formJson = Object.fromEntries(fromData.entries());

        let ticketInfo: TicketInfo = {
            movieId: movieDetails.movieId,
            movieName: movieDetails.movieName,
            movieScreen: movieDetails.movieScreen,
            bookingId: makeId(10),
            bookingCost: movieDetails.bookingCost,
            name: formJson.name.toString(),
            email: formJson.email.toString(),
            mobile: formJson.phone.toString()
        };

        dispatch(setTicket(ticketInfo));
        navigate("/show-ticket");
    }

    function makeId(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    return (
        <div className="bookTicket">
            <h3>Ticket booking</h3>
            <form onSubmit={formHandle}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="Name">Enter name</label></td>
                            <td><input type="text" name="name" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Enter email</label></td>
                            <td><input type="email" name="email" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Enter phone number</label></td>
                            <td><input type="tel" name="phone" /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" name="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default BookTicket;