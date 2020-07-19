 var myFullpage = new fullpage('#fullpage', {
    	verticalCentered: false,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage','6rdpage'],
      menu: '#menu',
      continuousVertical: true,
      afterLoad: function(anchorLink, index){
            console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
        },
        onLeave: function(index, nextIndex, direction){
            console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

        },
    });