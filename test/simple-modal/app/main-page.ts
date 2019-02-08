import { Button } from "tns-core-modules/ui/button";

const modalViewModulets = "./modal-view-page";

export function openModal(args) {
    const mainView: Button = <Button>args.object;
    const context = { username: "test_username", password: "test" };
    const fullscreen = false;

    mainView.showModal(modalViewModulets, context, (username, password) => {
        // Receive data from the modal view. e.g. username & password
        console.log(`Username: ${username} : Password: ${password}`);
    }, fullscreen);
}