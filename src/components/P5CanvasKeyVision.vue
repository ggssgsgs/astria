<template>
  <div ref="sketchWrapper">
    <div id="sketchParent">Hello KEY</div>
  </div>
</template>

<script>
//p5 import
import p5 from "p5";

export default {
  props: {
    sketchParent: String,
    imgSrc: String,
    numRandomBytes: Number,
  },
  data() {
    return {
      myp5: {},
    };
  },
  methods: {
    buildSketch(elm, p) {
      let containerWidth = this.$refs.sketchWrapper.clientWidth;
      let containerHeight = window.innerHeight;
      let parent = document.getElementById(elm);

      this.myp5 = new p5(function (sketch) {
        sketch.preload = () => {
          sketch.glitch = new Glitch(sketch); // new glitch object
          sketch.glitch.loadType("jpg");
          sketch.glitch.loadQuality(1);
          sketch.glitch.loadImage(p.imgSrc, function () {
            //load the image for glitching
            sketch.glitched(); //callback to glitch an image when its loaded
          });
        };
        sketch.setup = () => {
          sketch.createCanvas(containerWidth, containerHeight - 10);
          sketch.imageMode(sketch.CENTER);

          sketch.glitch.errors(false); //I know what I'm doing to the image is wrong
          sketch.disableFriendlyErrors = true; //We're friendly but still..
          sketch.noLoop(); //only draw the image once, rather than continuing to try to animate it
        };
        sketch.draw = () => {
          sketch.image(
            sketch.glitch.image,
            sketch.glitch.image.width / 2,
            sketch.glitch.image.height / 2
          );
        };
        sketch.glitched = () => {
          sketch.glitch.randomBytes(p.numRandomBytes); // set random bytes, throughout data
          sketch.glitch.buildImage();
        };
      }, parent);
    },
  },
  mounted() {
    //build the sketch when mounted
    this.buildSketch(this.sketchParent, this.$props);
  },

  watch: {
    $props: {
      handler(newValue) {
        this.myp5.remove();
        this.buildSketch(this.sketchParent, newValue);
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
