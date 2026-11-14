// Chords sa loob ng [ ]. Idagdag ang susunod na hymns sa dulo ng listahan.
const SONGS = [
{rev:2,t:"Amazing Grace",a:"John Newton",k:"G",l:`[G]Amazing grace, how [C]sweet the [G]sound
That saved a [Em]wretch like [D]me
I [G]once was lost, but [C]now am [G]found
Was [Em]blind but [D]now I [G]see

'Twas [G]grace that taught my [C]heart to [G]fear
And grace my [Em]fears re[D]lieved
How [G]precious did that [C]grace ap[G]pear
The [Em]hour I [D]first be[G]lieved

Through [G]many dangers, [C]toils and [G]snares
I have al[Em]ready [D]come
'Tis [G]grace hath brought me [C]safe thus [G]far
And [Em]grace will [D]lead me [G]home

When [G]we've been there ten [C]thousand [G]years
Bright [Em]shining as the [D]sun
We've [G]no less days to [C]sing God's [G]praise
Than [Em]when we'd [D]first be[G]gun`},
{rev:2,t:"Holy, Holy, Holy",a:"Reginald Heber",k:"D",l:`[D]Holy, holy, [G]holy! Lord God [D]Almighty!
Early in the [A]morning our song shall [D]rise to Thee
[D]Holy, holy, [G]holy, merciful and [D]mighty
God in three [A]Persons, blessed [G]Trin[D]ity

[D]Holy, holy, [G]holy! All the saints a[D]dore Thee
Casting down their [A]golden crowns around the glassy [D]sea
[D]Cherubim and [G]seraphim falling [D]down before Thee
Which wert, and [A]art, and evermore shalt [G]be[D]

[D]Holy, holy, [G]holy! Though the darkness [D]hide Thee
Though the eye of [A]sinful man Thy glory may not [D]see
[D]Only Thou art [G]holy; there is none be[D]side Thee
Perfect in [A]power, in love, and [G]pur[D]ity

[D]Holy, holy, [G]holy! Lord God [D]Almighty!
All Thy works shall [A]praise Thy name, in earth and sky and [D]sea
[D]Holy, holy, [G]holy, merciful and [D]mighty
God in three [A]Persons, blessed [G]Trin[D]ity`},
{rev:2,t:"What a Friend We Have in Jesus",a:"Joseph Scriven",k:"C",l:`[C]What a friend we have in [F]Jesus
All our [C]sins and griefs to [G]bear
[C]What a privilege to [F]carry
Everything to [C]God in [G]prayer [C]
Oh what [F]peace we often [C]forfeit
Oh what [G]needless pain we [C]bear
All be[F]cause we do not [C]carry
Everything to [G]God in [C]prayer

[C]Have we trials and temp[F]tations
Is there [C]trouble any[G]where
We should [C]never be dis[F]couraged
Take it to the [C]Lord in [G]prayer [C]
Can we [F]find a friend so [C]faithful
Who will [G]all our sorrows [C]share
Jesus [F]knows our every [C]weakness
Take it to the [G]Lord in [C]prayer

[C]Are we weak and heavy-[F]laden
Cumbered with a [C]load of [G]care
[C]Precious Savior, still our [F]refuge
Take it to the [C]Lord in [G]prayer [C]
Do thy [F]friends despise, for[C]sake thee
Take it to the [G]Lord in [C]prayer
In His [F]arms He'll take and [C]shield thee
Thou wilt [G]find a solace [C]there`},
{rev:2,t:"Rock of Ages",a:"Augustus Toplady",k:"G",l:`[G]Rock of Ages, [D]cleft for [G]me
Let me [C]hide myself in [G]Thee
Let the [G]water and the [D]blood
From Thy [C]wounded side which [G]flowed
Be of [C]sin the double [G]cure
Save from [D]wrath and make me [G]pure

[G]Not the labor of my [D]hands
Can ful[C]fill Thy law's de[G]mands
Could my [G]zeal no respite [D]know
Could my [C]tears forever [G]flow
All for [C]sin could not a[G]tone
Thou must [D]save, and Thou a[G]lone

[G]Nothing in my [D]hand I bring
Simply [C]to Thy cross I [G]cling
Naked, [G]come to Thee for [D]dress
Helpless, [C]look to Thee for [G]grace
Foul, I [C]to the fountain [G]fly
Wash me, [D]Savior, or I [G]die

[G]While I draw this [D]fleeting breath
When mine [C]eyes shall close in [G]death
When I [G]rise to worlds un[D]known
And be[C]hold Thee on Thy [G]throne
Rock of [C]Ages, cleft for [G]me
Let me [D]hide myself in [G]Thee`},
{rev:2,t:"Blessed Assurance",a:"Fanny Crosby",k:"D",l:`[D]Blessed assurance, Jesus is [A]mine
Oh what a foretaste of glory di[D]vine
Heir of salvation, purchase of [G]God
Born of His Spirit, washed in His [D]blood

This is my [G]story, this is my [D]song
Praising my [A]Savior all the day [D]long
This is my [G]story, this is my [D]song
Praising my [A]Savior all the day [D]long

[D]Perfect submission, perfect de[A]light
Visions of rapture now burst on my [D]sight
Angels descending, bring from [G]above
Echoes of mercy, whispers of [D]love
(Chorus)

[D]Perfect submission, all is at [A]rest
I in my Savior am happy and [D]blest
Watching and waiting, looking a[G]bove
Filled with His goodness, lost in His [D]love
(Chorus)`},
{rev:2,t:"It Is Well with My Soul",a:"Horatio Spafford",k:"C",l:`[C]When peace like a river at[F]tendeth my [C]way
When [G]sorrows like sea bil[C]lows roll
What[C]ever my lot, Thou hast [F]taught me to [C]say
It is [F]well, [C]it is well with my [G]soul[C]

It is [F]well [C]with my soul
It is [G]well, it is well with my [C]soul

[C]Though Satan should buffet, though [F]trials should [C]come
Let this [G]blessed assurance con[C]trol
That Christ hath re[F]garded my helpless es[C]tate
And hath [F]shed His own [C]blood for my [G]soul[C]
(Refrain)

[C]My sin, oh the bliss of this [F]glorious [C]thought
My [G]sin, not in part but the [C]whole
Is nailed to the [F]cross and I bear it no [C]more
Praise the [F]Lord, [C]praise the Lord, O my [G]soul[C]
(Refrain)

[C]And Lord, haste the day when my [F]faith shall be [C]sight
The [G]clouds be rolled back as a [C]scroll
The trump shall re[F]sound and the Lord shall de[C]scend
Even [F]so, [C]it is well with my [G]soul[C]
(Refrain)`},
{rev:2,t:"Come, Thou Fount of Every Blessing",a:"Robert Robinson",k:"G",l:`[G]Come, Thou Fount of every [D]blessing
Tune my [G]heart to sing Thy [D]grace
Streams of [G]mercy, never [D]ceasing
Call for [C]songs of loudest [G]praise
Teach me [G]some melodious [D]sonnet
Sung by [G]flaming tongues a[D]bove
Praise the [G]mount, I'm fixed up[D]on it
Mount of [C]Thy redeeming [G]love

Here I [G]raise mine Ebene[D]zer
Hither [G]by Thy help I'm [D]come
And I [G]hope, by Thy good [D]pleasure
Safely [C]to arrive at [G]home
Jesus [G]sought me when a [D]stranger
Wandering [G]from the fold of [D]God
He, to [G]rescue me from [D]danger
Interposed [C]His precious [G]blood

O to [G]grace how great a [D]debtor
Daily [G]I'm constrained to [D]be
Let Thy [G]goodness, like a [D]fetter
Bind my [C]wandering heart to [G]Thee
Prone to [G]wander, Lord, I [D]feel it
Prone to [G]leave the God I [D]love
Here's my [G]heart, O take and [D]seal it
Seal it [C]for Thy courts a[G]bove`},
{rev:2,t:"Abide with Me",a:"Henry Francis Lyte",k:"C",l:`[C]Abide with me, fast [F]falls the even[C]tide
The [Am]darkness deepens, [F]Lord, with me a[G]bide
When [C]other helpers fail and [F]comforts [C]flee
Help of the [F]helpless, O a[G]bide with [C]me

[C]Swift to its close ebbs [F]out life's little [C]day
Earth's [Am]joys grow dim, its [F]glories pass a[G]way
Change and [C]decay in all a[F]round I [C]see
O Thou who [F]changest not, a[G]bide with [C]me

[C]I need Thy presence [F]every passing [C]hour
What [Am]but Thy grace can [F]foil the tempter's [G]power
Who, like [C]Thyself, my guide and [F]stay can [C]be
Through cloud and [F]sunshine, Lord, a[G]bide with [C]me

[C]I fear no foe, with [F]Thee at hand to [C]bless
Ills [Am]have no weight, and [F]tears no bitter[G]ness
Where is [C]death's sting? Where, [F]grave, thy vic[C]tory
I tri[F]umph still, if [G]Thou abide with [C]me

[C]Hold Thou Thy cross be[F]fore my closing [C]eyes
Shine [Am]through the gloom and [F]point me to the [G]skies
Heaven's [C]morning breaks, and [F]earth's vain shadows [C]flee
In life, in [F]death, O Lord, a[G]bide with [C]me`},
{rev:2,t:"Praise to the Lord, the Almighty",a:"Joachim Neander",k:"G",l:`[G]Praise to the Lord, the Al[D]mighty, the King of cre[G]ation
O my [G]soul, praise Him, for [D]He is thy health and sal[G]vation
All ye who [C]hear, now to His [G]temple draw [D]near
Join me in [G]glad ad[D]ora[G]tion

[G]Praise to the Lord, who o'er [D]all things so wondrously [G]reigneth
Shieldeth thee [G]under His wings, yea, [D]so gently sus[G]taineth
Hast thou not [C]seen how thy de[G]sires e'er have [D]been
Granted in [G]what He or[D]dain[G]eth

[G]Praise to the Lord, who doth [D]prosper thy work and de[G]fend thee
Surely His [G]goodness and mercy [D]here daily at[G]tend thee
Ponder a[C]new what the Al[G]mighty can [D]do
If with His [G]love He be[D]friend [G]thee

[G]Praise to the Lord! O let [D]all that is in me a[G]dore Him
All that hath [G]life and breath, come [D]now with praises be[G]fore Him
Let the A[C]men sound from His [G]people a[D]gain
Gladly for [G]aye we a[D]dore [G]Him`},
{rev:2,t:"Be Thou My Vision",a:"Eleanor Hull (ancient Irish hymn)",k:"D",l:`[D]Be Thou my Vision, O [G]Lord of my [D]heart
Naught be all [Bm]else to me, [A]save that Thou [D]art
Thou my best [G]Thought, by day or by [D]night
Waking or [Bm]sleeping, Thy [A]presence my [D]light

[D]Be Thou my Wisdom, and [G]Thou my true [D]Word
I ever with [Bm]Thee and Thou [A]with me, [D]Lord
Thou my great [G]Father, I Thy true [D]son
Thou in me [Bm]dwelling, and [A]I with Thee [D]one

[D]Be Thou my battle [G]Shield, Sword for the [D]fight
Be Thou my [Bm]Dignity, Thou [A]my De[D]light
Thou my soul's [G]Shelter, Thou my high [D]Tower
Raise Thou me [Bm]heavenward, O [A]Power of my [D]power

[D]Riches I heed not, nor [G]man's empty [D]praise
Thou mine In[Bm]heritance, now and al[A]ways
Thou and Thou [G]only, first in my [D]heart
High King of [Bm]Heaven, my [A]Treasure Thou [D]art

[D]High King of Heaven, my [G]victory [D]won
May I reach [Bm]Heaven's joys, O [A]bright Heaven's [D]Sun
Heart of my own [G]heart, whatever be[D]fall
Still be my [Bm]Vision, O [A]Ruler of [D]all`}
];
