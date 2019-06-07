import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from '../rooms/AddRoom.js';
import ChatRooms from '../rooms/ChatRooms.js';
import { userRoomsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        main.appendChild(addRoomDOM);

        const chatRooms = new ChatRooms({ rooms: [] });
        const chatRoomsDOM = chatRooms.render();
        main.appendChild(chatRoomsDOM);

        userRoomsRef.on('value', snapshot => {
            const value = snapshot.val();
            const rooms = value ? Object.values(value) : [];
            chatRooms.update({ rooms });
        });


        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                <h1>WELCOME TO CHATROOMS:</h1>
                </main>
            </div>
        `;
    }
}

export default App;