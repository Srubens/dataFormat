
const run = (locale = "en-US") =>{
    const now = new Date()

    const format = (options = {}) =>{
        const formatter = new Intl.DateTimeFormat(locale, options)

        return formatter.format(now)
    }
    //dateStyle full, long, medium, short
    mlog("{dateStyle:'full'}", format({ dateStyle:'full' }))
    mlog("{dateStyle:'long'}", format({ dateStyle:'long' }))
    mlog("{dateStyle:'medium'}", format({ dateStyle:'medium' }))
    mlog("{dateStyle:'short'}", format({ dateStyle:'short' }))
    // clear()
    //ANO
    // mlog("{year:'numeric'}", format({year:'numeric'}))
    // mlog("{year:'2-digit'}", format({year:'2-digit'}))
    // clear()
    //HORAS
    // mlog("{hour:'2-digit'}", format({hour:'2-digit'}))
    // mlog("{hour:'numeric'}", format({hour:'numeric'}))
    // clear()
    //MINUTOS
    // mlog("{minute:'2-digit'}", format({minute:'2-digit'}))
    // mlog("{minute:'numeric'}", format({minute:'numeric'}))
    mlog("{day:'2-digit', month:'2-digit', year:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}",format({day:'2-digit', month:'2-digit', year:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}))

}

run()