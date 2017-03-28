import injectTapEventPlugin from "react-tap-event-plugin";
import jsdom from "jsdom";

injectTapEventPlugin();

const doc = jsdom.jsdom("<html><body></body></html>");
global.document = doc
global.window = doc.defaultView;

global.navigator = { userAgent: "node" };