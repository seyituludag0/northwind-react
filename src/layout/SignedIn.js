import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                <Dropdown pointing="top right" text="Seyit">
                   <Dropdown.Menu>
                         <Dropdown.Item>
                            <Dropdown.Item style={{color:"black"}} text="Bilgilerim" icon="sign-in" />
                            <Dropdown.Item onClick={signOut} style={{color:"black"}} text="Çıkış Yap" icon="sign-out" />
                        </Dropdown.Item>
                   </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
