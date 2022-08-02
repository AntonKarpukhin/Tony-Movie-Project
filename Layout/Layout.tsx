import { LayoutProps } from "./Layout.props";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { SidebarLeft } from "./SidebarLeft/SidebarLeft";
import { SidebarRight } from "./SidebarRight/SidebarRight";
import store from "../store";

import styles from './Layout.module.css'

const Layout = ({children}: LayoutProps): JSX.Element => {
	return  (
		<div className={styles.wrapper}>
			<div>
				<SidebarLeft/>
			</div>
			<div>
				{children}
			</div>
			<div>
				<SidebarRight/>
			</div>
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown> >(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Provider store={store}>
				<Layout>
					<Component {...props}/>
				</Layout>
			</Provider>
		);
	};
};