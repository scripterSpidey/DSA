function TrieNode(){
    return{
        children: {},
        end:false
    }
}


let trie = new TrieNode()
const dictionary = ["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb",
    "oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv",
    "nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc",
    "vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx",
    "iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go",
    "qggh","uud","trnhf","gels","dfdq","qzkx","qxw"]
const sentence = "ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp"
for(const word of dictionary ){
    let node = trie;
    if(word == 'r'){
        console.log('word r found: r')
    }
    
    for(const char of word ){
        if(!node.children[char]){
            node.children[char] = new TrieNode();
        }
        node = node.children[char]
    }
    node.end = true;
}

const replacedSentence = sentence.split(' ').map(word=>{
    // if(word == 'r'){
    //     console.log('word r found: r') 
    // }
    let string = ''
    let node = trie;
    for(const char of word){
        if(node.children[char]){
            string+=char;
            node = node.children[char];
            if(node.end) return string
        }else{
            return word;
        }
    }
    return word;
});
console.log(trie.children['r'])
// console.log(replacedSentence)

