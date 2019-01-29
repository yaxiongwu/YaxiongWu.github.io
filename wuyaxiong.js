const formatMessage = require('format-message');

const menuIconURI = 'data:image/png;base64,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';
//const blockIconURI = 'data:image/png;base64,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';

class Scratch3WuyaxiongBlocks {        
    static get STATE_KEY () {
        return 'Scratch.wuyaxiong';
    }   
    getInfo () {
             return {
            id: 'wuyaxiong',
            name: formatMessage({
                id: 'wuyaxiong.categoryName',
                default: 'Wuyaxiong',
                description: 'Name of extension that adds translate blocks'
            }),
            //blockIconURI: blockIconURI,
            menuIconURI: menuIconURI,
            blocks: [
                {
                    opcode: 'square',
                    text: formatMessage({
                        id: 'wuyaxiong.squareBlock',
                        default: 'square [NUM]',
                        description: 'square of number'
                    }),
                    blockType: 'reporter',
                    arguments: {
                        NUM: {
                            type: 'number',
                            defaultValue: formatMessage({
                                id: 'wuyaxiong.defaultNumToSquare',
                                default: '2',
                                description: 'wuyaxiong:the number to square'
                            })
                        }                       
                    }//arguments
                }             
            ],//blocks,
           // menus: {        }
        }
    }   
    
    square (args) { 
        return (args.NUM)*(args.NUM);
    }
}

module.exports = Scratch3WuyaxiongBlocks;
