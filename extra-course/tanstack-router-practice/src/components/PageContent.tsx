import type React from "react";
import classes from "./PageContent.module.css";
import type { ReactNode } from "react";

const PageContent: React.FC<{ title: string; children?: ReactNode }> = ({
	title,
	children,
}) => {
	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export default PageContent;
