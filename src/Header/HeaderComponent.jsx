import {MenuComponent} from "./components/MenuComponent";
import {MainComponent} from "./components/MainComponent";

export function HeaderComponent() {
    return (
        <div>
            <MenuComponent/>
            <MainComponent/>
        </div>
    )
}