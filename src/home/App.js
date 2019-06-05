import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRooms from '../home/ChatRooms.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const chatRooms = new ChatRooms();
        const chatRoomsDOM = chatRooms.render();
        main.appendChild(chatRoomsDOM);

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