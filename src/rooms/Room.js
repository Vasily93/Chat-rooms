import Component from '../Component.js';
import { userRoomsRef } from '../services/firebase.js';

class Room extends Component {

    render() {
        const dom = this.renderDOM();
        const room = this.props.room;

        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {
                userRoomsRef.child(room.key).remove();
            });
        }

        return dom;
    }

    renderTemplate() {
        const room = this.props.room;
        const button = '<button>Delete</button>';

        return /*html*/ `
        <li>
           <a href="">${room.name}</a>
           ${button}
        </li>
    `;
    }
}

export default Room;