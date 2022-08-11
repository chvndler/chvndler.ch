import * as React from 'react';
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";

export const ReactCommand = () => {
	const [page, setPage] = useState<"root" | "projects">("root");
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState("");
	
	React.useEffect(() => {
		const down = (e) => {
			if (e.key === 'k' && e.metaKey) {
				setOpen((open) => !open)
			}
		}
		
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])
	
	const filteredItems = filterItems(
		[
			{
				heading: "index",
				id: "index",
				items: [
					{
						id: "index",
						children: "Home",
						icon: "HomeIcon",
						href: "/",
					},
					{
						id: "settings",
						children: "Settings",
						icon: "CogIcon",
						href: "/developing",
					},
					{
						id: "projects",
						children: "Projects",
						icon: "CollectionIcon",
						closeOnSelect: false,
						onClick: () => {
							setPage("projects");
						},
					},
				],
			},
			{
				heading: "Other",
				id: "advanced",
				items: [
					{
						id: "developer-settings",
						children: "Developer settings",
						icon: "CodeIcon",
						href: "#",
					},
					{
						id: "privacy-policy",
						children: "Privacy policy",
						icon: "SupportIcon",
						href: "#",
					},
					{
						id: "log-out",
						children: "Log out",
						icon: "LogoutIcon",
						onClick: () => {
							alert("Logging out...");
						},
					},
				],
			},
		],
		search
	);
	
	return (
		<CommandPalette
			onChangeSearch={setSearch}
			onChangeOpen={setOpen}
			search={search}
			isOpen={open}
			page={page}
		>
			<CommandPalette.Page id="root">
				{filteredItems.length ? (
					filteredItems.map((list) => (
						<CommandPalette.List key={list.id} heading={list.heading}>
							{list.items.map(({ id, ...rest }) => (
								<CommandPalette.ListItem
									key={id}
									index={getItemIndex(filteredItems, id)}
									{...rest}
								/>
							))}
						</CommandPalette.List>
					))
				) : (
					<CommandPalette.FreeSearchAction />
				)}
			</CommandPalette.Page>
			
			<CommandPalette.Page id="projects">
				{/* Projects page */}
			</CommandPalette.Page>
		</CommandPalette>
	);
};
