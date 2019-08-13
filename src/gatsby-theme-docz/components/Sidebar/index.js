/** @jsx jsx */
import React, { Fragment, useState } from "react"
import { Global } from "@emotion/core"
import { jsx, Box } from "theme-ui"
import { useMenus } from "docz"

import * as styles from "gatsby-theme-docz/src/components/Sidebar/styles"
import { NavSearch } from "gatsby-theme-docz/src/components/NavSearch"
import { NavLink } from "../NavLink"
import { NavGroup } from "gatsby-theme-docz/src/components/NavGroup"



export const Sidebar = React.forwardRef((props, ref) => {
  const [query, setQuery] = useState("")
  const menus = useMenus({ query })


  const handleChange = ev => {
    setQuery(ev.target.value)
  }

  return [
    <Box key={`sidebar1`} onClick={props.onClick} sx={styles.overlay(props)}>
      {props.open && <Global styles={styles.global} />}
    </Box>,
    <Box key={`sidebar2`} ref={ref} sx={styles.wrapper(props)}>
      <NavSearch
        placeholder="Type to searches..."
        value={query}
        onChange={handleChange}
      />
      {menus &&
        menus.map(menu => {
          if (!menu.route) return <NavGroup key={menu.id} item={menu} />
          return (
            <NavLink key={menu.id} item={menu}>
              {menu.name}
            </NavLink>
          )
        })}
    </Box>,
  ]
})
