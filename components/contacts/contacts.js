import css from "./contacts.module.scss"

function Contacts() {
    return (
        <div className={css['contacts']+" pa5 pv6"}>
            <h2 className="white uppercase mr--lighter f2 tc mb3 mt0">Piesakies individuālajiem seansiem</h2>
            <p className="script f0 brown-2 tc ma0 lh05">Un sac baudit dzivi</p>

            <div className="flex flex-column mt3 ph7 mh5">
                <div className="input-group flex flex-wrap">
                    <div className="w-50 flex flex-column pr3">
                        <label className="white uppercase f3" htmlFor="name">Vārds</label>
                        <input className="mv3" id="name" type="text" placeholder="Vārds"/>
                    </div>
                    <div className="w-50 flex flex-column">
                        <label className="white uppercase f3" htmlFor="email">E-pasts</label>
                        <input className="mv3" id="email" type="email" placeholder="E-pasts"/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-50 flex flex-column pr3">
                        <label className="white uppercase f3" htmlFor="phone">Tālrunis</label>
                        <input className="mv3" id="phone" type="phone" placeholder="Tālrunis"/>
                    </div>
                    <div className="w-50 flex flex-column">
                        <label className="white uppercase f3" htmlFor="date">Datums</label>
                        <input className="mv3" id="date" type="date" placeholder="Datums"/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 flex flex-column">
                        <label className="white uppercase f3" htmlFor="message">Ziņa</label>
                        <textarea className="mv3" id="message" type="text" placeholder="Ziņa"/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="button--brown-2 w-20 mt4">Pierakstīties</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts