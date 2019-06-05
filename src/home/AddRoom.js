import Component from '../Component.js';

class AddRoom extends Component {


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