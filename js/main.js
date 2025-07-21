document.addEventListener('DOMContentLoaded', () => {

    // 1. Set your secret password here
    const yourPassword = "nostalgia";

    // 2. Add your memories here
    // UPDATED: I've added an optional 'tapeStyle' property.
    // Use 'tape-pink' to apply the pink tape style from our CSS.
    // If you leave it out, it will use the default blue tape.
    const memories = [
        {
            date: '2023-07-22',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928397/afterACL_tm6vi4.jpg',
            caption: 'Ти беше до мен винаги когато ми трябваше най-много!',
            tapeStyle: 'tape-pink' // NEW: Optional property for pink tape
        },
        {
            date: '2022-01-15',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928404/cageForKitties_pjsvbq.jpg',
            caption: 'А тук майсторим клетката за поколения котета напред. О, какъв спомен само!'
        },
        {
            date: '2024-04-05',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928393/cutties_ggnomn.jpg',
            caption: 'Това просто сме си ние - сладури (така де, по-скоро ти).',
            tapeStyle: 'tape-pink' 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928394/meWithGlasses_e5rhdk.jpg',
            caption: 'Тук ми показваш новите работи, които са ти дали на dev събитието.'
        }
        ,
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928398/onAWalk_f9knmt.jpg',
            caption: 'Тук просто си се разхождаме из балкана.',
            tapeStyle: 'tape-pink' 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928394/ourLastSpa_iqwlll.jpg',
            caption: 'А тук си ме снимала на последното място на което сме били заедно. Не е за вярване :('
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928393/peshtera_u4fibw.jpg',
            caption: 'При най-грижовните баба и дядо.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928394/seaPhoto_m3yvl9.jpg',
            caption: 'Ах морето, едно от любимите ми приключения с вас.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928423/shower_t675qs.jpg',
            caption: 'Рандом снимка на мен в банята. Любимото ти занимание - неочакваните снимки.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928395/staroplaninets_cfcfpc.jpg',
            caption: 'Бих казал че сме наистина красиви заедно и то си личи.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928397/usSmiling_dn4cqb.jpg',
            caption: 'Ето още едно потвърждение на думите ми.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928396/watermelon_myvbey.jpg',
            caption: 'Пак си ме хванала в момент на мултитаскинг.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928433/20221021_205539_sxjeep.jpg',
            caption: 'В този момент ти пак беше там. А лисичката... Core Memory',
            tapeStyle: 'tape-pink'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928428/20221218_002803_w9x3me.jpg',
            caption: 'Бяхме си направили маски след цял ден усърдна почивка на басейните.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928414/20220905_235837_lxyx3f.jpg',
            caption: 'А тук..., тук ми каза, че съм много хубав със синьо. Винаги ще го помня.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928431/20220824_215032_yyl6uq.jpg',
            caption: 'Тъкмо си бях взел този комплект, а колко съм малъккк.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928408/20221218_002416_qf0gzb.jpg',
            caption: 'Тук съм малко недоволен от новостите по лицето ми.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928420/20221217_171233_vdldag.jpg',
            caption: 'А това е една от любимите ми снимки... Красота.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928417/20221217_171259_m64im1.jpg',
            caption: 'Толкова хубав момент, че заслужава втора снимка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928433/20220920_233602_dkhesl.jpg',
            caption: 'Тук мога да усетя през снимката колко ми се спи всъщност.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928411/20221217_174758_is9i9t.jpg',
            caption: 'Просто красота, не знам по какъв друг начин да те опиша, без това да заеме останалото място в сайта.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928417/20220812_180719_bhmnis.jpg',
            caption: 'Тук ми мачкаш бузите - its a core memmory of cuteness.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928399/9e7f92d0-520c-445d-b598-c51931e50ccephoto_edg6lk.jpg',
            caption: 'Ах, сушито — още едно прекрасно нещо в живота, чиято врата ти отвори за мен.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928417/chair_s11nwa.jpg',
            caption: 'Изглеждам готов да покорим спа центъра.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928423/closeUp_t24otr.jpg',
            caption: 'Колко ми липсва да ми правиш такива снимки само аз си знам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928393/cooked_zcpgex.jpg',
            caption: 'Както бихме казали двамата с Фотев - "Ах, колко си хубава", а аз толкова хилав.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928416/cooking_y6eaw9.jpg',
            caption: 'Тук съм щастлив че ти готвя моя специалитет - пиле къри.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928419/gifts_dm3tnd.jpg',
            caption: 'Няма как да ти обясня колко бях щастлив от подаръците, може би тази усмивка може.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928100/gornishte_mr9bwu.jpg',
            caption: 'И ето ме и мен видимо доволен от новата придобивка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928424/kamsi_cjpzwk.jpg',
            caption: 'Двамата с Камси. Тук съм много малък.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928396/loveStare_tq20fi.jpg',
            caption: 'Момент тип: Ако не ме гледа така, не го искам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928408/pazardjik_llqhsw.jpg',
            caption: 'Тук сме на финала на мъжете в Пазарджик.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928406/skiTrip_lslrsm.jpg',
            caption: 'А тук ти показах, всъщност колко е хубаво усещането да караш ски... Свобода.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928410/topcho_jfgfuc.jpg',
            caption: 'Топчо, Бобчо или Дробчо, това е едно от най-сладките същества. Личи си, че много го обичам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752928410/winter_goog4r.jpg',
            caption: 'Приготвяме се да излезем на вечеря след дълъг ден...'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937539/hoodie_s7tzgm.jpg',
            caption: 'Тук сме на разходка във витоша, а тези дрехи са ми толкова любими, но малки.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937525/sky_gm02o7.jpg',
            caption: 'Красивото небе и някой дето да закрива пейзажа.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937526/wefour_z3cbvm.jpg',
            caption: 'Оу, тази четворка... Точно така изглеждаше мечтаното продължение на живота ми.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937523/nature_a731w0.jpg',
            caption: 'Какво да кажа освен, че тук се чувствам обичан.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937522/picnic_drfyre.jpg',
            caption: 'Хапваме сандвичите, които подготвихте преди дългия преход'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937519/nature2_qufv3g.jpg',
            caption: 'Стоп на прехода! Време е за сладка снимка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937511/princess_zo3wmu.jpg',
            caption: 'Боже мили, че това си е модерна принцеса.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937508/mirror_cdfwl9.jpg',
            caption: 'Огледалото... дори и то знае за нашата любов.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937506/meandtopcho_lwghdt.jpg',
            caption: 'Аз и топчо си имахме специална връзка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937504/mall_qxsdbt.jpg',
            caption: 'По време на разходка из софия, се озовахме в мола.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937500/gorgeous_eqm4i5.jpg',
            caption: 'Малкият Крисчо и неговия пример за подражание.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937460/happy_fvkmcw.jpg',
            caption: 'Ако ме видите да гледам така... Да знаете, много ми е хубаво.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937542/topcho_to_the_vet_wnnqn6.jpg',
            caption: 'Тук беше време за най-лошото за Топчо. Време за ветеринар или по-скоро излизане навън.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937539/sunburn_e84gyq.jpg',
            caption: 'Прочутият ми тен на потник, след като работихме по клетката на котетата.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937523/cute_baby_ya9tjq.jpg',
            caption: 'Още една случайна снимка от Старопланинец.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937493/volleyball_ri6lah.jpg',
            caption: 'Е... поредното нещо което ще ми липсва - това да играем заедно волейбол.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937492/sozopol_-_last_sea_z1lshf.jpg',
            caption: 'Созопол, 2024, кой ли е подозирал, че това хубаво преживяване ще е последното ни море заедно.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937482/hidden_predator_tmvki0.jpg',
            caption: 'Ето я и красавицата, но тя си има и друга страна.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937454/predator_getting_ready_oolzwr.jpg',
            caption: 'Тук изглежда като истински хищник, готов да атакува.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937487/predator_biting_hdznfp.jpg',
            caption: 'И ето я в действие, красавицата се оказа звяра'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937485/liga_sk95vs.jpg',
            caption: 'Хванати в крачка да коментираме лигата.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937458/table_tennis_hwy7ax.jpg',
            caption: 'Тенис на маса. Нашето нещо. Всичко започна още след операцията на пръста, а погледни се сега - по-добра си от мен'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937457/sunset_d2nlpv.jpg',
            caption: 'Ами да, за разлика от предната снимка, в тази си и ти, а ето го и резултата.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937453/escalator_gkvrdg.jpg',
            caption: 'Дори асансьорите не бяха място в коета да няма папараци (I loved this)'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937476/so_much_love_in_1_photo_sg7sxi.jpg',
            caption: 'Не знам как може да се хване толкова любов в една снимка, но ето я - това беше нашата любов.'
        },
        {
            date: '2024-08-10',
            type: 'video',
            url: 'https://res.cloudinary.com/ddkooxecn/video/upload/v1752937568/concert_of_the_Elatsi_v3sm1h.mp4',
            caption: 'Тук може да видим миналогодишния концерт на елаците и няколко бивши души'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937498/lofOfThings_pg4aln.jpg',
            caption: 'Уникална снимка, аз, ти, бела... 2 от 3 члена на тази снимка вече няма да са там.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937496/Dospat_ania7n.jpg',
            caption: 'Ето го и Доспат. Вашето място, мястото на което ме приехте. Талкова го обичал и чакам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937480/street_kitty_rvqvez.jpg',
            caption: 'Научи ме да не подминават уличните котета.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937478/sitting_with_topcho_sa7dxp.jpg',
            caption: 'Тук сме просто аз и той'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937474/4_of_us_in_the_nature_tlutfn.jpg',
            caption: 'И ето ни пак нас, великолепната четворка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937471/getting_some_cold_air_okricl.jpg',
            caption: 'Малко на въздух, защото вътре е много топло.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937471/told_me_im_cute_umcf5z.jpg',
            caption: 'Каза, че съм изглеждал много добре от този ъгъл, а аз се усмихнах.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937465/chukara_gz4yoy.jpg',
            caption: 'Чукара, поредното наше приключение, което ще остане в сърцето ми завинаги.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937462/angle_of_me_ppipa3.jpg',
            caption: 'Може би наистина е хубав този ъгъл.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752937469/Best_Photo_-_HIGHLIGHT_sqidvt.jpg',
            caption: 'For me personally, one of our best photos together. I love it.',
            favorite: true 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752940797/myNade_wnzkjh.jpg',
            caption: 'Лицата ни, когато осъзнаем, че почивката е свършила.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752940795/best_friends_r1ohvg.jpg',
            caption: 'ДА, това си бяхме просто ние двамата.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752940789/the_Dospat_i_wont_forget_u6lgd8.jpg',
            caption: 'Това място, този регион, нещо пълно със спомени и хубави моменти. Няма как да го забравя.',
            favorite: true
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1752940784/getting_ready_for_fishing_gvn0sv.jpg',
            caption: 'А тук бях развълнуван и готов за дълъг риболовен ден.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035653/myNade_doehu9.jpg',
            caption: 'Да, ето така гледаше моята Наденичка!'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035645/littleME_qglmkv.jpg',
            caption: 'Ето още една стара снимка, Дали пък времето не лети?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035644/Feeling_cute_fbwpae.jpg',
            caption: 'Рядко срещано и аз да съм в това число, но тук сме супер красиви.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035642/insofia_sjsm0s.jpg',
            caption: 'В София, до рибрският магазин, преди да отидем за риба на баластриерата'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035632/feeling_beautifull_again_bv07tv.jpg',
            caption: 'Мед ми капе от сърцето, когато ни видя, а от очите....'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035626/bobatea_qy3yrf.jpg',
            caption: 'Време беше да пробвам и боба чай.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035580/the_Dospat_i_wont_forget_umzop2.jpg',
            caption: 'Доспат.... Каквото и да напиша ще е малко'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035567/irini_gacocr.jpg',
            caption: 'Ейто тук сме в Ирини на хубавата и полезна храна (последен път) :('
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035554/Going_to_another_Spa_ku4nay.jpg',
            caption: 'Кой ли знае накъде сме се запътили, а?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035550/getting_ready_for_fishing_rym3bq.jpg',
            caption: 'Някъде тук се отключи страстта ми към риболова'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035528/black_hmvvpp.jpg',
            caption: 'Черно с Черно... Любимата ти комбинация.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035523/best_friends_whgtgp.jpg',
            caption: 'Някой ме е хванал в момент, който си беше наш с Бобчо'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035773/coldd_hfoyge.jpg',
            caption: 'Вън е студ, а ние сме си все така двамата'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035671/Pursi_o4zyur.jpg',
            caption: '2 минути гушки преди да се приберем от Ямна.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035666/our_first_christmas_xu3pip.jpg',
            caption: 'Не плачаа... Първата ни коледа заедно.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035662/Lovely_ski_trip_wx4ro5.jpg',
            caption: 'Едно красиво моментче.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035658/Bela_moment_takbpl.jpg',
            caption: 'Ах белааа, тръгна си толкова бързо.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035654/another_Aventure_dxjxcu.jpg',
            caption: 'Нов зимен ден, студено време, оползотворено с любими хора.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035611/u_photographing_me_psrn57.jpg',
            caption: 'Цял живот бягам от тези папараци.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035607/small_shirt_jna3ck.jpg',
            caption: 'Леле... Ето това е красота.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035603/my_new_potink_heiaay.jpg',
            caption: 'Нямаше как да не покажем и новият ми потник на преден план хехе.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035598/Driver_licence_b0jt7g.jpg',
            caption: 'Core memory, аз, ти, аудито и истинските ми емоции.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035594/damnnn_Belchin_hlguov.jpg',
            caption: 'Леле, Белчин, а сякаш беше вчера, а?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035589/cuddles_while_studying_qxzh46.jpg',
            caption: 'Много е важно да легнем върху лаптопа, няма как.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035718/what_a_moment_x23lrc.jpg',
            caption: 'Дали пък не ни личи колко сме щастливи?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035714/wait_for_it_ppidzz.jpg',
            caption: 'Не изглеждам готов за тази снимка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035710/us_again_fhtkhc.jpg',
            caption: 'Ясно го помня как се почувствах доминиран.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035706/no_private_space_ncxwjo.jpg',
            caption: 'Лично простраснво ли? Виждал съм, но няма.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035701/u_want_some_yqf82y.jpg',
            caption: 'Винаги бих ти предложил от моето хапване, душа.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035697/me_and_Bobcho_zj9bla.jpg',
            caption: 'Я да видим на кой му е добре така, а?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035693/good_lightning_nu1q3n.jpg',
            caption: 'Тук... да кажем, че светлината е добра, а?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035689/cuteeee_gudcgo.jpg',
            caption: 'Само да можех да осъзная красотата дето ми носиш, дето ми даваш.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035686/corgicafe_ercjpq.jpg',
            caption: 'Хихи коргита, големи сладуранковци бяха, реших, че ще гледаме едно заедно.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035681/core_memory_cg7v8e.jpg',
            caption: 'Както казах вече, любимо мое нещо, което ти правеше.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035676/apreciate_those_dzncwk.jpg',
            caption: 'Може да се кандидатираме за Мис и Мистър Ямна... мисля, че имаме доста голям шанс.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035616/what_am_i_doing_hgh7ns.jpg',
            caption: 'За този тип снимки, обяснение нямам, но и не е нужно.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035767/what_am_i_doing_nkpvgn.jpg',
            caption: 'Тук тренирам, но от този ъгъл не се подразбира, фотографа е бил добър.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035762/topcho_everywhere_rbnffz.jpg',
            caption: 'Нека хапна малко, но нека не забравяме, че комфорта на Принца е по-важен.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035758/this_was_us_non_stop_wzxt0m.jpg',
            caption: 'ДА, Наде, много му личи на човек, когато е щастлив, все пак видя как изглеьдам сега.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035754/the_little_princess_twrmpa.jpg',
            caption: 'Вто го и още един спомен, една малка принцеса, която вече не е тук.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035750/Our_room_in_proggress_g95orr.jpg',
            caption: 'Ето го и първото попълнение за НАШАТА стая, както искаше да я наричаме.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035745/my_guy_viko_kkytyj.jpg',
            caption: 'Вико, как можех да знам че преди месец го виждам за последен път?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035742/how_did_i_have_that_wnfglz.jpg',
            caption: 'Оставам без думи за теб, трябва ми синонимен речник за думата красота.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035741/favourite_l7em1q.jpg',
            caption: 'Как така получих шанс с такова прекрасно създание.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035732/beautifull_pqy6lj.jpg',
            caption: 'Тук сме малко на бал, няма как.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035726/after_Spa_yay8xj.jpg',
            caption: 'Малко ми се спи, нищо, че цял ден СПАх'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035722/achievement_wfaqq8.jpg',
            caption: 'Къщата... прогресираме и вече му се вижда края.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035621/Paradise_s4jedc.jpg',
            caption: 'Късно вечер, нарамил раничката ти из уличките около парадайс.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035585/the_strangest_tiramisu_rwupme.jpg',
            caption: 'Най-интересният ресорант, в който съм бил и най-чаканото тирамису.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035576/or_nor_qj4ib2.jpg',
            caption: 'Хоп, откраднал съм ти динята малко тук.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035572/only_u_look_good_ly89ay.jpg',
            caption: 'Виж се просто, ПРИНЦЕСО. Изпъкваш!'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035564/look_at_this_ooq31x.jpg',
            caption: 'Ами да, такива сме си, сладури.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035559/im_dead_avgxnm.jpg',
            caption: 'Туууук да кажем, че съм лееееко припаднал за момент.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035546/elevator_bmrqnq.jpg',
            caption: 'Много свежа рокличка, loving it.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035541/dad_s_pose_h4dovk.jpg',
            caption: 'Тук тате е заел уникална поза.' 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035533/2_years_ago_ckjodw.jpg',
            caption: 'Минаха над 2 години от тогава, не е реално нали?'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035520/the_chill_time_we_had_aytaqv.jpg',
            caption: 'Почивахме си и се зареждахме един друг за предстоящите дни.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035514/i_look_good_here_qogeqe.jpg',
            caption: 'Окей, добре, признавам тук изглеждам добре, но може би е просто светлината'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035513/photo_bomb_a9vhpx.jpg',
            caption: 'Хайде още една снимчица от приключение и една фото бомба.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'https://res.cloudinary.com/ddkooxecn/image/upload/v1753035537/all_love_you_t7vxwy.jpg',
            caption: 'ДА, всички те те обичаха, обичат и ще продължават да те обичат no matter what happens.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: '',
            caption: ''
        }

    ];

    // --- PASSWORD PAGE LOGIC (No changes needed here) ---
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const passwordInput = document.getElementById('password-input');
            const errorMessage = document.getElementById('error-message');
            
            if (passwordInput.value === yourPassword) {
                window.location.href = 'memories.html';
            } else {
                errorMessage.style.visibility = 'visible';
                passwordInput.focus();
            }
        });
    }

    // --- MEMORIES PAGE LOGIC ---
     const scrapbookContainer = document.getElementById('scrapbook-container');
    if (scrapbookContainer) {
        const sortedMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setupTimeline(sortedMemories);
        renderMemories(sortedMemories);

        Fancybox.bind("[data-fancybox]", {});
    }
    
    // UPDATED: To handle filtering and re-rendering
    let currentFilter = 'All'; 
    let currentlyDisplayedMemories = [];

    function setupTimeline(allMemories) {
        const timelineNav = document.getElementById('timeline-nav');
        timelineNav.innerHTML = ''; 
        const years = ['All', ...new Set(allMemories.map(m => m.date.substring(0, 4)))];

        // NEW: Add the "Favorites" button first
        const favoritesButton = document.createElement('button');
        favoritesButton.className = 'timeline-button';
        favoritesButton.innerHTML = '★ Favorites'; // Using a star icon
        favoritesButton.addEventListener('click', () => filterAndRender('Favorites'));
        timelineNav.appendChild(favoritesButton);

        years.forEach(year => {
            const button = document.createElement('button');
            button.className = 'timeline-button';
            button.textContent = year;
            button.addEventListener('click', () => filterAndRender(year));
            timelineNav.appendChild(button);
        });
    }

    // NEW: Combined filter and render function
    function filterAndRender(filter) {
        currentFilter = filter;
        const allMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (filter === 'All') {
            currentlyDisplayedMemories = allMemories;
        } else if (filter === 'Favorites') {
            currentlyDisplayedMemories = allMemories.filter(m => m.favorite);
        } else {
            currentlyDisplayedMemories = allMemories.filter(m => m.date.startsWith(filter));
        }

        renderMemories(currentlyDisplayedMemories);

        // Update active button style
        document.querySelectorAll('.timeline-button').forEach(button => {
            button.classList.remove('active');
            if (button.textContent.includes(filter)) {
                button.classList.add('active');
            }
        });
        // Special case for 'All' button if needed
        if (filter === 'All') document.querySelector('.timeline-button').classList.add('active');
    }

    // REWRITTEN: To include the favorite toggle button and state
    function renderMemories(memoriesToRender) {
        const scrapbook = document.getElementById('scrapbook-container');
        scrapbook.innerHTML = '';

        if (memoriesToRender.length === 0) {
            scrapbook.innerHTML = `<p class="empty-message">No favorite memories yet. Click the pin icon on a memory to add one!</p>`;
            return;
        }

        memoriesToRender.forEach(memory => {
            const isVideo = memory.type === 'video';
            const tapeClass = memory.tapeStyle || '';
            const favoriteClass = memory.favorite ? 'is-favorite' : '';

            const item = document.createElement('div');
            item.className = `scrapbook-item ${tapeClass} ${favoriteClass}`;
            
            // The HTML now includes the favorite button
            item.innerHTML = `
                <button class="favorite-toggle" title="Toggle Favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16 3.00002C18.7614 3.00002 21 5.23859 21 8.00002C21 10.133 19.8331 12.0161 18.2323 13.1931L18.2317 13.1935C18.232 13.1933 18.2323 13.1931 18.2323 13.1931L12.0003 19.424L5.76826 13.192C3.96843 11.8887 3 9.85915 3 7.76826C3 5.12251 5.12251 3 7.76826 3C9.43846 3 10.9577 3.82846 11.8893 5.05041L12.0003 5.20148L12.1113 5.05041C13.0429 3.82846 14.5621 3.00002 16 3.00002Z"></path></svg>
                </button>
                <a href="${memory.url}" data-fancybox="gallery" data-caption="${memory.caption}">
                    ${isVideo ? `<video muted loop playsinline src="${memory.url}"></video>` : `<img src="${memory.url}" alt="${memory.caption}">`}
                </a>
                <div class="item-caption">${memory.caption}</div>
            `;

            // Add the event listener for the toggle button
            item.querySelector('.favorite-toggle').addEventListener('click', () => {
                // Find the original memory object in the main array by its URL and toggle its status
                const originalMemory = memories.find(m => m.url === memory.url);
                if (originalMemory) {
                    originalMemory.favorite = !originalMemory.favorite;
                }
                // Re-run the filter and render function to update the view
                filterAndRender(currentFilter);
            });
            
            scrapbook.appendChild(item);
        });
    }

    // Initial load
    filterAndRender('All');
});