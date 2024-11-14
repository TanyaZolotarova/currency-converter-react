import {MenuComponent} from "./Components/MenuComponent";
import {MainComponent} from "./Components/MainComponent";

export function HeaderComponent(){
    return(
        <div>
           <MenuComponent/>
            <MainComponent/>
        </div>
    )
}