/**
 *
 * Created with JetBrains WebStorm.
 * User: lijin
 * Date: 13-7-26
 * Time: 下午7:38
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){


    /**
     *
     * @param config
     * config.data
     * config.key
     */
    var getRSA = function(config){
        var prekey = config.prekey;
        var hashAlg = "sha256";
        var data = config.data;
        var rsa = new RSAKey();

        rsa.readPrivateKeyFromPEMString(prekey);
        var hSig = rsa.signString(data, hashAlg);
        var backData = linebrk(hSig, 64);

        return backData;
    }

    /**
     * click event
     */
    $("button").click(function(){
        config = {};
        //config.key = "BC86E3DC782C446EE756B874ACECF2A115E613021EAF1ED5EF295BEC2BED899D\n26FE2EC896BF9DE84FE381AF67A7B7CBB48D85235E72AB595ABF8FE840D5F8DB";
        config.prekey = "-----BEGIN RSA PRIVATE KEY-----"+
        "MIICWwIBAAKBgQDRhGF7X4A0ZVlEg594WmODVVUIiiPQs04aLmvfg8SborHss5gQ"+
        "Xu0aIdUT6nb5rTh5hD2yfpF2WIW6M8z0WxRhwicgXwi80H1aLPf6lEPPLvN29EhQ"+
        "NjBpkFkAJUbS8uuhJEeKw0cE49g80eBBF4BCqSL6PFQbP9/rByxdxEoAIQIDAQAB"+
        "AoGAA9/q3Zk6ib2GFRpKDLO/O2KMnAfR+b4XJ6zMGeoZ7Lbpi3MW0Nawk9ckVaX0"+
        "ZVGqxbSIX5Cvp/yjHHpww+QbUFrw/gCjLiiYjM9E8C3uAF5AKJ0r4GBPl4u8K4bp"+
        "bXeSxSB60/wPQFiQAJVcA5xhZVzqNuF3EjuKdHsw+dk+dPECQQDubX/lVGFgD/xY"+
        "uchz56Yc7VHX+58BUkNSewSzwJRbcueqknXRWwj97SXqpnYfKqZq78dnEF10SWsr"+
        "/NMKi+7XAkEA4PVqDv/OZAbWr4syXZNv/Mpl4r5suzYMMUD9U8B2JIRnrhmGZPzL"+
        "x23N9J4hEJ+Xh8tSKVc80jOkrvGlSv+BxwJAaTOtjA3YTV+gU7Hdza53sCnSw/8F"+
        "YLrgc6NOJtYhX9xqdevbyn1lkU0zPr8mPYg/F84m6MXixm2iuSz8HZoyzwJARi2p"+
        "aYZ5/5B2lwroqnKdZBJMGKFpUDn7Mb5hiSgocxnvMkv6NjT66Xsi3iYakJII9q8C"+
        "Ma1qZvT/cigmdbAh7wJAQNXyoizuGEltiSaBXx4H29EdXNYWDJ9SS5f070BRbAIl"+
        "dqRh3rcNvpY6BKJqFapda1DjdcncZECMizT/GMrc1w=="+
        "-----END RSA PRIVATE KEY-----";

        config.data = $("#inputEmail").val();
        console.log(getRSA(config));
        console.log("   ")
    })
})
