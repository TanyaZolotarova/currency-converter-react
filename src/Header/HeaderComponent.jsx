import {MenuComponent} from "./components/MenuComponent";
import {MainComponent} from "./components/MainComponent";
import {MainHeaderComponent} from "./components/MainHeaderComponent";

export function HeaderComponent() {
    return (
        <div>
            <MenuComponent/>
            <MainComponent/>
        </div>
    )
}