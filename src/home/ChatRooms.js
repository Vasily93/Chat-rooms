import Component from '../Component.js';
import Room from './Room.js';

class ChatRooms extends Component {
    render() {
        const rooms = this.renderDOM();

        const room = new Room();
        const roomDOM = room.render();
        rooms.appendChild(roomDOM);


        return rooms;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="room-chats">
                <h3>Chat     Rooms List</h3>
            </ul>
        `;
    }
}

export default ChatRooms;