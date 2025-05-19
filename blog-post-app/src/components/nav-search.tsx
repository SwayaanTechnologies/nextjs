"use client";

import { useState } from "react";

export const NavSearch = () => {
    console.log('NavSearch rendered');
     const [search, setSearch] = useState("");
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nav Search Input"
            />
        </div>
    );
}