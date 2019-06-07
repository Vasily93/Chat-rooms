import Component from '../Component.js';
import Room from '../rooms/Room.js';

class ChatRooms extends Component {
    render() {
        const dom = this.renderDOM();
        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new Room({ room });
            dom.appendChild(roomItem.render());
            
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <ul>
                <h3>Chat Rooms List</h3>
            </ul>
        `;
    }
}

export default ChatRooms;