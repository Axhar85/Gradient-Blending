 // Create first objest of Granim

 let granimInstance = new Granim({
     element: "#canvas-image-blending",
     direction: 'top-bottom',
     isPausedWhenNotInView: true,
     Image: {
         source: "./assets/img1.jpg",
         blendingMode:'multiply',
         stretchMode : ['stretch', 'stretch-if-bigger']
     },
     states:{
         "default-state":{
            gradients:[
                ['#DAE2F8','#DAE2F8']
            ]
         }
     }
 })