import Component from '../Component.js';
import { auth, userRoomsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const userRoomRef = userRoomsRef.push();

            userRoomRef.set({
                key: userRoomRef.key,
                name: input.value,
                owner: auth.currentUser.uid
            })
                .then(() => {
                    form.reset();
                });
        });

        return form;
    }


    renderTemplate() {
        return /*html*/ `
        <form class="add-room">
            <label> 
                New Room:
                <input type="text">
            </label>
            <button class="add-button">Add Room</button>
        </form>
    `;
    }

}

export default AddRoom;