import {ConverterComponent} from "./components/ConverterComponent";
import {HistoryConverterComponents} from "./components/HistoryConverterComponents";

export function CurrencyConverterComponent() {
    return (
        <>
            <ConverterComponent/>
            <HistoryConverterComponents/>
        </>
    );
}
