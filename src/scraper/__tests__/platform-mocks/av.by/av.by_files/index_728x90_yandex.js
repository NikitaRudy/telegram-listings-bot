(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,190);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-0.0114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-50.7,-11.7,101.4,23.5), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfEoIgugJIgugIIgEgCIgBgDIgEhiIABggIAAggIABgCIAMAAIACARIADARQAMAzA0AbQAlASAyAHQAoAEAhgHQAggGAUgRQAXgSAFgZQAEgZgPgZQgSgfgqgWQgRgJgYgJIgogOIgwgRQgbgKgUgKQgZgLgRgMQgUgPgNgTQgYghADglIABgKQAMAaAPARQAbAfAxAUQAXAJAdAIIA2ANIA4ANQAgAJAYAJQAvATAdAfQAaAdAEAnQAEAkgSAiQgLAVgTAQQgQAOgWALQgjARguAHQggAEgfAAQgoAAgpgGgAixDqIABAeIAWAEIA+AMQAoAGAmAAQAfAAAegEQAsgGAfgQQArgWASghQAQgfgDggQgEghgWgYQgbgcgsgRQgVgJgdgIIgzgNIgNgDIg0gMQgdgIgWgJQgkgOgYgUQAMAQATANQAOAJAUAKQASAIAYAJIArAPIAWAIIAiAMQAUAIAQAIQAuAZAUAiQASAfgFAfQgGAfgbAWQgYATgjAHQgWAFgYAAQgPAAgSgCQg2gHgmgUQgogUgTghIACAzgADSBUQgTgogxgYQgUgKgagJQgTgFgegHIg8gQIg+gQQgxgOghgaQgngdgFgnQgJg4AogpQAdgeA0gOQAqgMA3ADQBKAFBsAYIADABIABAEIACAjIACAkIgBBHIAAAEIgLAAIgDgXQgIgzgzgaQgggRgsgFQgogFgkAEQglAEgcANQgfAOgEAdQgEAaARAXQAXAdAmAMIAnAMIAmAKIA5AQQAgAKAXALQApAUAVAZQAWAcgCAmQAAALgDAIg");
	this.shape.setTransform(-0.0322,0.0212);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-21.7,-30.2,43.4,60.5), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGvByQgfgBgYgVQgQgPgRggQgXgpgGgGQgQgXgUgCIAAAVQAAAfAUADIAAADQgQgCgKAAIgfABIgOABIAAgDQAJgBAFgHQAGgIAAgUIAAhFQAAgcgUgFIAAgCIAdACIAcgBIARgBIADAAIAMABQANABAGADIADACQAXAJAAAVQgBAVgUAJIgMADIgOAEIgBAAQATAFAOAQQAJALANAWQAQAbAHALQAQAUATAMQAOAJARAEQAXAEAPgHIgBAFQgtANgQAAIgCAAgAEZhkQgDAGAAAUIAAAdQAIACAJAAQAfAAAAgfQAAgdgeAAQgJAAgGADgAHKBNQgOgDgOgPQgJgKgLgQIgSgdQgRgagTgPIADABQAMAFAHAIQAIAIAJANIAPAWQAeAwAaAJIgIAAgAgdAhIg9hxQgNgagPgEIAAgCIAhABQAQABAQgCIAAACQgIACABAIQAAAIAJATIAiBAIAehCQAHgOAAgHQAAgKgKgEIAAgCIAHABIAQABIAUgCIAAACQgJAEgFAGQgGAGgJAUIgzBrgAm8AhQgJAAgOgDQgNgDgHAAIgBgBIABgGIgBgNIgBgNIABgJIADAAQABAQAMALQAOALAQAAQANAAAIgHQAHgHAAgJQAAgLgHgGQgIgFgWgHQgRgGgHgEQgJgEgFgIQgFgIAAgJQAAgIAEgIQAHgOASgIQAQgHARAAQAPAAAXAFIABAkIgDAAQAAgPgNgIQgMgHgQAAQgOAAgJAGQgJAGAAAIQAAAIAHAFQAHAGAWAHQATAGAIAFQAKAFAFAJQAGAIAAALQAAAQgRAOQgQANgSACIgIAAgACjAeIguAAQgcAAgSACIAAgDQAHgCAEgFQAEgFABgGQACgHAAgWIAAg4QAAgTgFgIQgGgHgHgCIAAgCQAZACA0AAIAqgCIABAdIgDAAQgEgLgHgEQgFgDgRAAIgWAAIgKABQgCAEAAARIAAAfIAcAAQARAAAGgDQAFgDADgKIADAAIgBAVIABAOIABALIgDAAQgCgMgFgEQgHgEgNAAIghAAIAAAdQAAAPABAOIAMAAIAVAAQAQAAAJgDQAJgEAIgNIADAAIgEAOIgFASQgQgCgMAAgAiIAeIgxgBQghAAgSADIAAgDQAKgEAEgIQADgJAAgSIAAhAQAAgVgFgGQgGgHgGgCIAAgCQAkACAXgCIAJAAIAAACQgLADgEAIQgEAIAAAQIAAA7QAAAMACAKQABALABACQACABAGAAIAcAAQAPAAAKgFQAKgEAHgNIADAAIgGATQgDAJgBAGQgLgCgNAAgAlkAgIAAgDQALgDADgIQAEgKABgWIAAg8QgBgRgEgIQgEgIgKgDIAAgCIAjACQAUAAAOgCIAAACQgIACgGAHQgEAHgBAXIAABAQAAAUAGAHQAGAHAHACIAAADQgcgEgpAEg");
	this.shape.setTransform(0,0.0259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-49.5,-11.4,99,22.9), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAiIAAg0IgVAAIAAgPIA8AAIAAAPIgWAAIAAA0g");
	this.shape.setTransform(40.2,1.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAYQgHgJAAgOQAAgQAJgKQAJgJANAAQAOAAAJAKQAJAKgBATIgrAAQAAAIAEAFQAEAEAFAAQAEAAADgCQADgDACgFIARADQgDAKgHAFQgIAFgLAAQgRAAgIgLgAgIgQQgEAEAAAHIAaAAQgBgHgDgEQgEgFgGAAQgEAAgEAFg");
	this.shape_1.setTransform(33.3014,1.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAhIAAgNIADAAIAEAAQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAAgNIAAgmIA7AAIAABCIgSAAIAAg0IgXAAIAAAeQAAALgDAFQgCAEgEACQgDABgHAAIgLgBg");
	this.shape_2.setTransform(25.275,1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAiIAAgqIgbAqIgRAAIAAhDIARAAIAAAqIAagqIASAAIAABDg");
	this.shape_3.setTransform(17.5,1.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSArQgJgFgDgJQgDgJgBgUQABgYAIgKQAJgLAWAAIAJAAQADAAABgCIANAAQgBAIgEAEQgDAEgPAAIgDAAIgDAAQgHAAgFACQgFACgEAFQgDAFAAAMQADgHAHgEQAGgDAHAAQAOAAAJAKQAKAJAAAOQAAAOgKAKQgKAKgPAAQgLAAgHgFgAgLAAQgEAEgBAKQABAJAEAFQAFAFAGAAQAGAAAFgFQAEgGABgIQgBgJgEgFQgFgFgGAAQgGAAgFAFg");
	this.shape_4.setTransform(9.5,-0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAiIAAhDIASAAIAAAcIARAAQALAAAFACQAGABAEAEQAEAFAAAHQAAAKgHAFQgHAFgNAAgAgOAWIAQAAQAIAAACgCQACgDAAgDQAAgFgEgCQgDgCgJAAIgMAAg");
	this.shape_5.setTransform(-1.925,1.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAiIAAg0IgVAAIAAgPIA8AAIAAAPIgWAAIAAA0g");
	this.shape_6.setTransform(-9.3,1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAiIAAgqIgbAqIgRAAIAAhDIARAAIAAAqIAbgqIARAAIAABDg");
	this.shape_7.setTransform(-16.5,1.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMAiIAAg0IgXAAIAAA0IgSAAIAAhDIA7AAIAABDg");
	this.shape_8.setTransform(-24.5,1.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAuIgCgNIAJAAQAFAAAEgDQADgEABgGIgZhDIATAAIAOAvIAQgvIASAAIgXBAIgFAMQgCAGgCADIgEAFIgHADIgJACIgKgCg");
	this.shape_9.setTransform(-32.05,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAMAvIgLgYIgBgCIgCgFQgDgHgCgBQgDgCgEAAIAAApIgTAAIAAhcIATAAIAAAnQAGAAACgDQACgDAEgLQAGgQAGgDQAFgEAOAAIACAAIAAAOIgCAAQgGAAgDABQgDACgBADIgFAMIgDAIQgDADgFADQAHABAEAFIAJAPIAMAag");
	this.shape_10.setTransform(-39.15,-0.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ArPDIQgeAAAAgeIAAlTQAAgeAeAAIWfAAQAeAAAAAeIAAFTQAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-75,-20,150,40), null);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg");
	this.shape.setTransform(33.525,2.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BbIAAiyIAUAAIAAAQQAHgJAJgFQAJgFALAAQARAAANAJQAMAIAHAQQAGAPAAASQAAAVgHAOQgHARgOAIQgNAIgPAAQgKAAgJgEQgJgFgFgHIAAA/gAgZg8QgKANAAAaQAAAXAKANQAKAMAOgBQAOAAAKgMQALgNAAgZQAAgYgKgNQgLgMgNAAQgOAAgLANg");
	this.shape_1.setTransform(20.025,4.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_2.setTransform(5.775,2.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxAcIAVgEQADAMAIAHQAJAHAKAAQALAAAIgGQAHgHAAgJQAAgIgFgGQgEgFgGgCIgSgBIgFAAIAAgQIASgBQAFgBAFgFQAEgFAAgHQAAgJgFgFQgGgGgKAAQgRAAgIAWIgVgDQAKglAlAAQAUAAAMAMQAMALAAAQQAAAQgQAJQAKAEAFAIQAFAIAAALQAAASgNALQgMALgXAAQgsAAgHgog");
	this.shape_3.setTransform(-7.025,2.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBSQgMgKgHgRQgHgQAAgoQAAgzARgTQASgRAjAAQAWAAADgBQADAAABgDIAUAAQgCANgEAFQgFAGgHABQgHABgUABQgaAAgKAEQgKAGgEALQgFAMAAASQAIgMALgHQALgFANAAQAaAAAQARQARASAAAdQAAAWgIAOQgJAPgLAIQgMAIgUAAQgWAAgNgLgAgagHQgJANAAAWQAAAXALAMQAKAMAPAAQARAAAKgOQAKgNAAgXQAAgVgJgMQgKgNgSABQgRAAgKANg");
	this.shape_4.setTransform(-19.675,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_5.setTransform(-33.875,2.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(-42.8,-15.9,85.6,31.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA0QgPgRgBgcIgbAAIAAA6IgXAAIAAiBIAXAAIAAA2IAbAAQACgcAPgOQANgPAXAAQAUAAALAIQALAIAIAOQAHAOAAAXQAAAhgPARQgPASgaAAQgYAAgOgQgAAAgkQgIANgBAWQABAaAIAMQAJANAPAAQAOAAALgMQAJgLAAgaQAAgYgIgNQgJgMgQAAQgQAAgJAMg");
	this.shape.setTransform(58.75,2.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBBIAAhiIg8BiIgXAAIAAiBIAWAAIAABiIA8hiIAXAAIAACBg");
	this.shape_1.setTransform(42.075,2.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBBIAAiBIBJAAIAAASIgzAAIAABvg");
	this.shape_2.setTransform(31.375,2.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_3.setTransform(19.025,2.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BAIAAgSIAJAAQAHAAADgCQADgBABgDQABgDAAgRIAAhUIBlAAIAACAIgWAAIAAhuIg5AAIAAA/QAAAXgCAHQgBAHgHAGQgGAFgNAAIgRgBg");
	this.shape_4.setTransform(4.125,2.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_5.setTransform(-9.475,2.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig8AAIAAA6IgVAAIAAiBIAVAAIAAA2IA8AAIAAg2IAWAAIAACBg");
	this.shape_6.setTransform(-23.3,2.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBBIgagpIgHgKIghAzIgaAAIAuhDIgrg+IAbAAIAUAfIAJAOIAJgOIAWgfIAbAAIgtA9IAvBEg");
	this.shape_7.setTransform(-36.45,2.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg");
	this.shape_8.setTransform(-49.725,2.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBBIAAhvIgqAAIAAgSIBpAAIAAASIgqAAIAABvg");
	this.shape_9.setTransform(-62.325,2.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-70,-15.9,140,31.9), null);


(lib.Symbol20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKgAgOgNQgFAGAAAHQAAAJAFAGQAHAGAHAAQAIAAAHgGQAFgGAAgJQAAgHgFgGQgHgHgIAAQgHAAgHAHg");
	this.shape.setTransform(88.25,-6.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBJQgRgXAAgyQAAgfAGgTQAHgTANgLQAMgKATAAQAOAAALAFQALAGAHALQAHALAEAQQAEAPAAAaQAAAfgGAUQgHATgMALQgNAKgUAAQgZAAgPgSgAgXg7QgMAQAAArQAAAsALAPQAKAOAOAAQAPAAAKgOQALgPAAgsQAAgrgLgPQgKgOgPAAQgOAAgJANg");
	this.shape_1.setTransform(76.275,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBYQAAgVAIgeQAIgeAPgaQAOgcARgTIhXAAIAAgVIBzAAIAAARQgRASgRAeQgRAdgIAgQgGAXgCAag");
	this.shape_2.setTransform(62.475,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BaQAAgIACgIQAFgMAKgLQAKgMATgPQAcgYAKgNQAKgOAAgNQAAgNgJgJQgJgJgPAAQgPAAgKAKQgJAJAAARIgXgCQACgZAPgOQAQgNAYAAQAaAAAPAOQAPAPAAAVQAAAKgFALQgEAKgKALQgKALgYAUQgTARgFAGQgGAGgEAGIBXAAIAAAVg");
	this.shape_3.setTransform(48.275,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg");
	this.shape_4.setTransform(27.625,2.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBBIAAg6Ig8AAIAAA6IgWAAIAAiBIAWAAIAAA2IA8AAIAAg2IAVAAIAACBg");
	this.shape_5.setTransform(13.85,2.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBBIAAhvIgqAAIAAgSIBpAAIAAASIgqAAIAABvg");
	this.shape_6.setTransform(-5.725,2.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg");
	this.shape_7.setTransform(-18.475,2.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA8BBIgYgoQgHgNgFgDQgFgEgIAAIAAA8IgVAAIAAg8QgIAAgFAEQgFADgIANIgXAoIgYAAIAYgoQANgXAPgDQgKgEgEgGQgEgFgIgUQgCgHgDgBQgEgCgGAAIgGAAIAAgSIADAAQAMAAAGACQAFABAEAFQAEAFAHAQQAIATAEAEQAEAEALAAIAAg4IAVAAIAAA4QALAAAEgEQAEgEAIgTQAIgTAGgFQAGgFANAAIAIAAIAAASIgGAAQgJAAgCADQgDACgFAOQgFAMgEAFQgEAFgJAEQAOADAOAXIAYAog");
	this.shape_8.setTransform(-33.675,2.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOA0QgPgRgCgcIgbAAIAAA6IgVAAIAAiBIAVAAIAAA2IAbAAQADgcAPgOQANgPAXAAQAUAAALAIQAMAIAHAOQAIAOAAAXQAAAhgQARQgPASgbAAQgXAAgOgQgAAAgkQgIANAAAWQAAAaAIAMQAIANAPAAQAPAAAKgMQAKgLAAgaQAAgYgJgNQgIgMgRAAQgQAAgIAMg");
	this.shape_9.setTransform(-51.1,2.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAyQgQgRAAghQAAgUAGgPQAHgQAPgIQAOgIAQAAQAVAAANALQAOALADATIgVADQgDgNgIgGQgIgHgLAAQgPAAgLAMQgKAMAAAZQAAAaAKAMQAKAMAPAAQANAAAJgIQAJgIACgRIAVADQgDAWgPANQgOANgWAAQgZAAgQgSg");
	this.shape_10.setTransform(-66.675,2.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BBIAAiBIAzAAQARAAAJADQAJADAHAJQAGAIAAAMQAAAJgDAHQgEAHgIAEQAJACAGAJQAGAIAAALQgBATgMAJQgMAJgXAAgAgeAvIAdAAQARAAAHgFQAHgEABgLQAAgGgEgFQgEgFgHgCQgGgBgOAAIgaAAgAgegJIAXAAQANAAAGgCQAFgBAEgFQAEgEAAgGQAAgLgHgEQgHgEgRAAIgYAAg");
	this.shape_11.setTransform(-86.575,2.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy2, new cjs.Rectangle(-95.5,-16,191,32), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBBIAAhoIgnBoIgSAAIglhtIAABtIgVAAIAAiBIAiAAIAiBnIAlhnIAgAAIAACBg");
	this.shape.setTransform(103.75,2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_1.setTransform(88.175,2.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBBIAAg6Ig9AAIAAA6IgVAAIAAiBIAVAAIAAA2IA9AAIAAg2IAVAAIAACBg");
	this.shape_2.setTransform(74.35,2.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBBIAAhoIgnBoIgSAAIglhtIAABtIgVAAIAAiBIAjAAIAhBnIAlhnIAgAAIAACBg");
	this.shape_3.setTransform(58.85,2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg");
	this.shape_4.setTransform(43.225,2.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BbIAAiyIAUAAIAAARQAHgKAJgFQAJgFALAAQARAAANAIQAMAJAHAPQAGAQAAATQAAATgHAQQgHAPgOAJQgNAJgPgBQgKABgJgFQgJgFgFgHIAAA/gAgZg7QgKANAAAYQAAAYAKAMQAKAMAOAAQAOAAAKgMQALgMAAgZQAAgZgKgMQgLgNgNAAQgOAAgLAOg");
	this.shape_5.setTransform(29.725,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_6.setTransform(15.475,2.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig8AAIAAA6IgWAAIAAiBIAWAAIAAA2IA8AAIAAg2IAXAAIAACBg");
	this.shape_7.setTransform(1.65,2.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg");
	this.shape_8.setTransform(-12.275,2.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBBIAAhvIg5AAIAABvIgWAAIAAiBIBlAAIAACBg");
	this.shape_9.setTransform(-25.925,2.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BBIAAiBIAzAAQARAAAJADQAJADAHAJQAGAIAAAMQAAAJgDAHQgEAHgIAEQAJACAGAJQAGAIAAALQgBATgMAJQgMAJgXAAgAgeAvIAdAAQARAAAHgFQAHgEABgLQAAgGgEgFQgEgFgHgCQgGgBgOAAIgaAAgAgegJIAXAAQANAAAGgCQAFgBAEgFQAEgEAAgGQAAgLgHgEQgHgEgRAAIgYAAg");
	this.shape_10.setTransform(-45.975,2.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_11.setTransform(-66.875,2.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig8AAIAAA6IgWAAIAAiBIAWAAIAAA2IA8AAIAAg2IAXAAIAACBg");
	this.shape_12.setTransform(-80.7,2.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfBBIAAhiIg8BiIgXAAIAAiBIAWAAIAABiIA8hiIAXAAIAACBg");
	this.shape_13.setTransform(-94.575,2.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBBIgXgoQgHgMgFgEQgFgEgHAAIAAA8IgXAAIAAiBIAXAAIAAA4QAKAAAEgEQAEgEAIgTQAGgQAEgFQAEgEAFgCQAFgCAMAAIAEAAIAAASIgFAAQgKAAgCADQgCACgFAOQgGAMgDAFQgFAFgIAEQANADAOAXIAZAog");
	this.shape_14.setTransform(-106.1,2.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(-114.5,-16,229.1,32), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA0QgPgRgBgcIgbAAIAAA6IgXAAIAAiBIAXAAIAAA2IAbAAQACgcAPgOQANgPAXAAQAUAAALAIQALAIAIAOQAIAOgBAXQAAAhgPARQgPASgbAAQgXAAgOgQgAAAgkQgIANgBAWQABAaAIAMQAJANAOAAQAPAAALgMQAJgLAAgaQAAgYgIgNQgJgMgRAAQgPAAgJAMg");
	this.shape.setTransform(82.7,2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBZIgCgVQAHACAFAAQAIAAAEgDQAEgCADgEIAHgRIABgGIgwiAIAXAAIAbBLQAFAOADAPIAJgdIAchLIAXAAIgyCCQgIAWgEAIQgFALgIAFQgIAFgKAAQgGAAgIgCg");
	this.shape_1.setTransform(66.85,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig7AAIAAA6IgXAAIAAiBIAXAAIAAA2IA7AAIAAg2IAXAAIAACBg");
	this.shape_2.setTransform(53.6,2.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig8AAIAAA6IgVAAIAAiBIAVAAIAAA2IA8AAIAAg2IAXAAIAACBg");
	this.shape_3.setTransform(39.8,2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_4.setTransform(25.925,2.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBBIAAhiIg8BiIgXAAIAAiBIAWAAIAABiIA8hiIAXAAIAACBg");
	this.shape_5.setTransform(12.025,2.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBTIAAglIhjAAIAAiAIAWAAIAABuIA7AAIAAhuIAWAAIAABuIAOAAIAAA3g");
	this.shape_6.setTransform(-1.625,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg");
	this.shape_7.setTransform(-16.275,2.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BBIAAiBIAzAAQARAAAJADQAJADAHAJQAGAIAAAMQAAAJgDAHQgEAHgIAEQAJACAGAJQAGAIAAALQgBATgMAJQgMAJgXAAgAgeAvIAdAAQARAAAHgFQAHgEABgLQAAgGgEgFQgEgFgHgCQgGgBgOAAIgaAAgAgegJIAXAAQANAAAGgCQAFgBAEgFQAEgEAAgGQAAgLgHgEQgHgEgRAAIgYAAg");
	this.shape_8.setTransform(-29.475,2.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_9.setTransform(-43.425,2.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBBIAAg6Ig9AAIAAA6IgVAAIAAiBIAVAAIAAA2IA9AAIAAg2IAVAAIAACBg");
	this.shape_10.setTransform(-57.25,2.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBBIAAg6Ig7AAIAAA6IgXAAIAAiBIAXAAIAAA2IA7AAIAAg2IAXAAIAACBg");
	this.shape_11.setTransform(-71.05,2.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfBBIAAhiIg8BiIgXAAIAAiBIAWAAIAABiIA8hiIAXAAIAACBg");
	this.shape_12.setTransform(-84.925,2.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-93.9,-16,187.9,32), null);


(lib.Symbol19copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBZIAAiyIAkAAIAABIIAvAAQAiAAAQAQQAOAPAAAWQAAATgJANQgJANgMAEQgMAEgWAAgAglA8IAjAAQAQgBAGgBQAHgCAFgFQAGgHgBgIQABgNgKgFQgIgGgUAAIglAAg");
	this.shape.setTransform(68,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BFQgXgZAAgrQAAgrAXgYQAXgZAlAAQAhgBAUAUQAMALAGAWIgjAJQgDgOgKgJQgLgHgOgBQgTAAgMAPQgNAOAAAgQAAAhANAOQAMAOASAAQAPABAKgKQAKgJAFgTIAjALQgIAdgTAPQgTANgcAAQgjABgXgYg");
	this.shape_1.setTransform(49.575,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBZIAAh0IhHB0IgkAAIAAiyIAiAAIAAB2IBHh2IAkAAIAACyg");
	this.shape_2.setTransform(31.625,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBTQgRgJgIgaIAhgLQAFARAJAFQAIAEANAAQAQAAAIgIQAHgHAAgKQAAgKgIgHQgJgGgRAAIgIAAIAAgaIAEAAQAQAAAIgIQAJgHAAgNQAAgJgHgHQgHgHgMAAQgXAAgHAXIgjgJQAMgrA1AAQAegBAQAOQAQAOAAATQAAAMgHALQgHALgPAHQASAFAJAMQAJAKAAARQAAAYgRAOQgSAOgiAAQgbAAgQgJg");
	this.shape_3.setTransform(14.425,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BYIAAgaIAOAAQAMAAAGgEQAFgFAFgPIhCiAIApAAIAoBdIAkhdIAmAAIg9CHQgKAXgJALQgKALgQAAQgQAAgJgCg");
	this.shape_4.setTransform(-0.775,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEBZIAAiyIA6AAQAgABAKACQAQAEAKAOQALANAAAVQAAARgGALQgGAKgKAHQgJAGgJACQgNADgYAAIgXAAIAABDgAgfgIIATAAQAVABAHgDQAHgDAEgGQAEgGAAgIQAAgJgFgHQgGgGgJgCIgZgBIgRAAg");
	this.shape_5.setTransform(-16.525,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BZIAAiyIB4AAIAAAfIhUAAIAACTg");
	this.shape_6.setTransform(-31.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BFQgYgZAAgrQAAgaAIgTQAGgNALgMQALgKAMgFQARgIAVABQAngBAYAZQAYAZAAAqQAAArgYAZQgXAYgoAAQgnABgXgYgAgjgtQgOAPAAAeQAAAfAOAPQAOAPAVAAQAWAAAOgPQANgQAAgeQAAgegNgQQgOgPgWAAQgVAAgOAQg");
	this.shape_7.setTransform(-49.025,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjBZIAAiTIhFAAIAACTIgkAAIAAiyICNAAIAACyg");
	this.shape_8.setTransform(-67.775,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19copy2, new cjs.Rectangle(-78.7,-16,157.5,32), null);


(lib.Symbol19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBZIAAh0IhHB0IgkAAIAAiyIAiAAIAAB2IBHh2IAkAAIAACyg");
	this.shape.setTransform(45.025,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBZIAAiyIA6AAQAgABAKACQAQAEAKAOQALANAAAVQAAARgGALQgGAKgKAHQgJAGgJACQgNADgYAAIgXAAIAABDgAgfgIIATAAQAVABAHgDQAHgDAEgGQAEgGAAgIQAAgJgFgHQgGgGgJgCIgZgBIgRAAg");
	this.shape_1.setTransform(28.075,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_2.setTransform(11.8,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BFQgYgZAAgrQAAgaAIgTQAGgNALgMQALgKAMgFQARgIAVABQAngBAYAZQAYAZAAAqQAAArgYAZQgXAYgoAAQgnABgXgYgAgjgtQgOAPAAAeQAAAfAOAPQAOAPAVAAQAWAAAOgPQANgQAAgeQAAgegNgQQgOgPgWAAQgVAAgOAQg");
	this.shape_3.setTransform(-5.525,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BZIAAiMIgkCMIgiAAIgiiMIAACMIgiAAIAAiyIA2AAIAfB6IAgh6IA2AAIAACyg");
	this.shape_4.setTransform(-25.75,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BFQgXgZAAgrQAAgrAXgYQAXgZAlAAQAhgBAUAUQAMALAGAWIgjAJQgDgOgKgJQgLgHgOgBQgTAAgMAPQgNAOAAAgQAAAhANAOQAMAOASAAQAPABAKgKQAKgJAFgTIAjALQgIAdgTAPQgTANgcAAQgjABgXgYg");
	this.shape_5.setTransform(-45.225,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19copy, new cjs.Rectangle(-56.2,-16,112.4,32), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBwIAAh0IhHB0IgkAAIAAiyIAiAAIAAB2IBHh2IAkAAIAACygAgZhVQgKgJgCgRIARAAQABAJAFAEQAFAFAJAAQAKAAAGgFQAFgEABgJIAQAAQgBARgKAJQgKAKgRAAQgPAAgKgKg");
	this.shape.setTransform(62.375,-2.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BYIAAgaIAOAAQAMAAAGgEQAFgFAFgPIhCiAIApAAIAoBdIAkhdIAmAAIg9CHQgKAXgJALQgKALgQAAQgQAAgJgCg");
	this.shape_1.setTransform(45.625,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBZIAAiyICFAAIAAAfIhhAAIAAApIAwAAQAUAAANAFQANAFAJAMQAKANAAASQAAASgKANQgJANgMAFQgMAEgWAAgAgmA8IAjAAQAQgBAHgBQAHgCAFgFQAFgHAAgIQAAgNgJgFQgJgGgUAAIglAAg");
	this.shape_2.setTransform(29.275,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BFQgYgZAAgrQAAgaAIgTQAGgNALgMQALgKAMgFQARgIAVABQAngBAYAZQAYAZAAAqQAAArgYAZQgXAYgoAAQgnABgXgYgAgjgtQgOAPAAAeQAAAfAOAPQAOAPAVAAQAWAAAOgPQANgQAAgeQAAgegNgQQgOgPgWAAQgVAAgOAQg");
	this.shape_3.setTransform(10.225,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBZIAAiyIA6AAQAgABAKACQAQAEAKAOQALANAAAVQAAARgGALQgGAKgKAHQgJAGgJACQgNADgYAAIgXAAIAABDgAgfgIIATAAQAVABAHgDQAHgDAEgGQAEgGAAgIQAAgJgFgHQgGgGgJgCIgZgBIgRAAg");
	this.shape_4.setTransform(-7.525,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBZIAAiTIhFAAIAACTIgkAAIAAiyICNAAIAACyg");
	this.shape_5.setTransform(-25.175,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+BFQgYgZAAgrQAAgaAIgTQAGgNALgMQALgKAMgFQARgIAVABQAngBAYAZQAYAZAAAqQAAArgYAZQgXAYgoAAQgnABgXgYgAgjgtQgOAPAAAeQAAAfAOAPQAOAPAVAAQAWAAAOgPQANgQAAgeQAAgegNgQQgOgPgWAAQgVAAgOAQg");
	this.shape_6.setTransform(-43.825,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBZIAAiTIhFAAIAACTIgkAAIAAiyICNAAIAACyg");
	this.shape_7.setTransform(-62.575,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-73.5,-16,147.1,32), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-175,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-175,-95,350,190), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA5F3C").s().p("ApwFfIAAq6IN2kdIFrD3IAAMSIlrDogAo/FSIM1EGIAAkAIpFhsgAESJSIEri+Ikrg3gAESk0IAAJ1IFEA7IAArmgApVE+ID4hqIAAmnIj4hpgAlDjQIAAGiII5BqIAApsgAo8lPIDtBlIJFhhIAAkMgAESlQIEugyIkujOg");
	this.shape.setTransform(0.0004,-0.0196,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-37.5,-38,75,76), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap0FKIAAqTITpAAIAAKTg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-62.9,-33,125.8,66), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHD1QgWABgSgMQgSgMgMgUIislJIAAF0IiBAAIAAnpIBqAAQATAAATAMQARALAIARICvFLIAAlzICBAAIAAHpg");
	this.shape.setTransform(0.0005,-0.0088,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-13.7,-14.2,27.5,28.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFD1QgfAAgVgVQgWgWAAgfIAAlVQAAgfAWgVQAVgWAfAAIFVAAIAABTIkfAAIAAB4IDYAAIAABTIjYAAIAAB4IEfAAIAABTg");
	this.shape.setTransform(0.0282,0.0267,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-12,-14.2,24.1,28.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFD1QgfAAgWgVQgVgWAAgfIAAlVQAAgfAVgVQAWgWAfAAIFVAAIAABTIkfAAIAAB4IDYAAIAABTIjYAAIAAB4IEfAAIAABTg");
	this.shape.setTransform(-0.0303,0.0267,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-12.1,-14.2,24.2,28.5), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfD1IidjoIAAgQICXAAIAAieIi2AAIAAGWIiBAAIAAnpIFoAAQAdAAAaAYQAZAZAAAeIAAClQAAAegaAYQgaAYgcAAIgdAAIByCng");
	this.shape.setTransform(-0.0362,0.0267,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-12.9,-14.2,25.8,28.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDD1QgeAAgXgWQgXgWAAgeIAAlVQABgfAWgVQAWgWAfAAIFTAAIAABTIkdAAIAAFDIEdAAIAABTg");
	this.shape.setTransform(-0.0371,0.0267,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-12,-14.2,24,28.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjeD1IAAhTIE8AAIAAh4IjyAAQgeAAgWgWQgWgVAAgfIAAiKQAAgfAWgWQAVgVAfAAIFzAAIAABTIk8AAIAAB4IDyAAQAdAAAWAXQAXAVAAAeIAACKQAAAfgUAVQgUAWgeAAg");
	this.shape.setTransform(-0.0315,0.0267,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-12.9,-14.2,25.8,28.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-364,-45,728,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-364,-45,728,90), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(81.9,0);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-83.05,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-132.5,-11.7,265.1,23.5), null);


(lib.Symbol18copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.t2 = new lib.Symbol20copy2();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(0,-5);

	this.t1 = new lib.Symbol19copy2();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(0,-31.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy2, new cjs.Rectangle(-95.5,-47.9,191,58.9), null);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.t3 = new lib.Symbol21copy();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(0,21.9);

	this.t2 = new lib.Symbol20copy();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(0,-5);

	this.t1 = new lib.Symbol19copy();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(0,-31.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-114.5,-47.9,229.1,85.8), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.t3 = new lib.Symbol21();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(0,21.9);

	this.t2 = new lib.Symbol20();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(0,-5);

	this.t1 = new lib.Symbol19();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(0,-31.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-93.9,-47.9,187.9,85.8), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.o1 = new lib.Symbol17();
	this.o1.name = "o1";
	this.o1.parent = this;
	this.o1.setTransform(0,0,0.6457,0.6457);

	this.timeline.addTween(cjs.Tween.get(this.o1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-113,-61.3,226,122.69999999999999), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.o1 = new lib.Symbol26();
	this.o1.name = "o1";
	this.o1.parent = this;
	this.o1.setTransform(0,3.35);

	this.o2 = new lib.Symbol24();
	this.o2.name = "o2";
	this.o2.parent = this;
	this.o2.setTransform(-2.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.o2},{t:this.o1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-132.5,-49.2,265.1,93.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA2DOIihkCIAAAAIhwizIBNgWIBWB4IAAgBIA5BRIAAABIAAAAIDbEyg");
	mask.setTransform(76.175,5.6);

	// Layer_8
	this.o1 = new lib.Symbol10();
	this.o1.name = "o1";
	this.o1.parent = this;
	this.o1.setTransform(-6.35,-64.15,1,1,14.4417,0,0,-62.9,-33.1);

	var maskedShapeInstanceList = [this.o1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.o1).wait(1));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjZDpIEPm2ICkgxIjZEyIgBABIAAAAIg4BRIgBAAIhVB5g");
	mask_1.setTransform(76.2125,-5.025);

	// Layer_9
	this.o2 = new lib.Symbol10();
	this.o2.name = "o2";
	this.o2.parent = this;
	this.o2.setTransform(-6.35,-64.15,1,1,14.4417,0,0,-62.9,-33.1);

	var maskedShapeInstanceList = [this.o2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.o2).wait(1));

	// s
	this.s = new lib.Symbol12();
	this.s.name = "s";
	this.s.parent = this;
	this.s.setTransform(159.55,-0.55,1,1,0,0,0,72.9,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.s).wait(1));

	// Layer_2
	this.t6 = new lib.Symbol8();
	this.t6.name = "t6";
	this.t6.parent = this;
	this.t6.setTransform(29.7,0.6);

	this.t5 = new lib.Symbol7();
	this.t5.name = "t5";
	this.t5.parent = this;
	this.t5.setTransform(0.95,0.55);

	this.t4 = new lib.Symbol6();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(-25.8,0.55);

	this.t3 = new lib.Symbol5();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(-53.4,0.55);

	this.t2 = new lib.Symbol4();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(-81.15,0.55);

	this.t1 = new lib.Symbol3();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(-108.95,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-121.9,-38.2,246.10000000000002,76.1), null);


(lib.mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var logo1 = this.logo1;
		var logo2 = this.logo2;
		var pic = this.pic;
		var txt1 = this.txt1;
		var txt2 = this.txt2;
		var txt3 = this.txt3;
		var black1 = this.black1;
		var black2 = this.black2;
		var bt = this.bt;
		
		/*
		btn.on("mouseover", function(){
		var btnover = new TimelineMax();
		btnover.to(btn.t1, 0.4, {scaleX:1.1, scaleY:1.1, ease:Expo.easeOut}, "-=0.0")
		       .to(btn.o1, 0.4, {scaleX:1.2, scaleY:1.2, ease:Expo.easeOut}, "-=0.4")
		master.stop();
		return btnover;	  
			});
			
		btn.on("mouseout", function(){
		var btnout = new TimelineMax();
		btnout.to(btn.t1, 0.8, {scaleX:1.0, scaleY:1.0, ease:Elastic.easeOut}, "-=0.0")
		      .to(btn.o1, 0.8, {scaleX:1.0, scaleY:1.0, ease:Elastic.easeOut}, "-=0.8")
		master.play();
		return btnout;	  
			});
		
		btn.on("click", function(){
			window.open("https://r.onliner.by/", "_blank");	
			});	
		*/
		
		
		var master = new TimelineMax({repeat: -1, delay:0.1})
		
		master.add( frame1() )
		     // .add( frame2(), "-=0.5")
		
		function frame1() {
			
		var frame1 = new TimelineMax();
		
		frame1
		
		
		/*	.from(logo2.s1, 0.6, {scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.6")
			.from(logo2.p1, 0.6, {scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.6")
			
			.from(logo2.s2, 0.2, {scaleY:0, ease:Power0.easeInOut}, "-=0.05")
			.from(logo2.p2, 0.2, {scaleY:0, ease:Power0.easeInOut}, "-=0.2")
			
			.from(logo2.s3, 0.2, {scaleY:0, ease:Power0.easeInOut}, "-=0.05")
			.from(logo2.p3, 0.2, {scaleY:0, ease:Power0.easeInOut}, "-=0.2")
			
			.from(logo2.s4, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.05")
			.from(logo2.p4, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.6")
			
			.from(logo2.b1, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.6")
			.from(logo2.b2, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.6")
			.from(logo2.b3, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.6")
			.from(logo2.b4, 0.6, {scaleY:0, ease:Expo.easeOut}, "-=0.6")*/
			
			 
			.from(logo1.o1, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.0")	
			.from(logo1.o2, 0.8, {scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, "-=0.7")	
		 		
			.staggerFrom([logo2.t1, logo2.t2, logo2.t3, logo2.t4, logo2.t5, logo2.t6], 1.0, {scaleX:0, alpha:0, ease:Expo.easeOut}, 0.05, "-=0.6")	
			
			.from(logo2.s, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeOut}, "-=1.0")	 	
			
			.from(logo2.o1, 1.2, {rotation:"-=42", ease:Expo.easeInOut}, "-=1.2")	
			.from(logo2.o2, 1.2, {rotation:"-=42", ease:Expo.easeInOut}, "-=1.0")
			
			.to(logo1, 1.2, {y:-18, x:-275, scaleX:0.53, scaleY:0.53, ease:Expo.easeInOut}, "-=0.5")	
			.to(logo2, 1.2, {y:18, x:-275, scaleX:0.47, scaleY:0.47, ease:Expo.easeInOut}, "-=1.1")	
				
			.from(pic, 1.2, {scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut, onStart:function () {pic_fn.restart();}}, "-=0.6")	
			
			.from(txt1.t1, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.8")	
			.from(txt1.t2, 0.8, {scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, "-=0.7")	
			.from(txt1.t3, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")
			.from(bt, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")	
			
			
			.to(txt1.t1, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "+=0.2")		
			.to(txt1.t2, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.75")	
			.to(txt1.t3, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.75")
			
			.from(txt2.t1, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.1")	
			.from(txt2.t2, 0.8, {scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, "-=0.7")	
			.from(txt2.t3, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")		
			
			
			.to(txt2.t1, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "+=0.2")	
			.to(txt2.t2, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.75")	
			.to(txt2.t3, 0.8, {scaleX:0, scaleY:0, alpha:0, ease:Expo.easeIn}, "-=0.75")
			
			.from(txt3.t1, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.1")	
			.from(txt3.t2, 0.8, {scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, "-=0.7")	
			
			
			.from(black1, 0.8, {alpha:0, ease:Expo.easeIn}, "+=2")	
			
		/*	 
		     .from(pic1, 1.2, {y:"-=280", ease:Expo.easeOut}, "-=1.15")
			 .from(logo.o1, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.8")
			 .from(logo.o2, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")
		     .staggerFrom([logo2.t1, logo2.t2, logo2.t3, logo2.t4, logo2.t5, logo2.t6, logo2.t7, logo2.t8], 1.0, {scaleX:0, alpha:0, ease:Expo.easeOut}, 0.05, "-=0.8")
			 .from(logo.o1, 1.8, {scaleY:0, scaleX:0.5, ease:Elastic.easeOut.config(1.0, 0.3), onComplete:function () {sky.play();}}, "-=0.8" ) 
			 .from(white, 0.8, {alpha:0, ease:Expo.easeIn, onStart:function () {N=N+1; if (N==3) {master.stop();}}}, "+=2.5")	   
		*/
		
		return frame1;
			
		}
		
		var pic_fn = new TimelineMax({repeat: -1, delay:0.0})
		pic_fn.from(pic.o1, 10, {scaleX:0.9, scaleY:0.9, ease:Linear.easeNone})
		//return sky;
		//console.log(master.duration());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipG0QgoAAgdgcIipiqQgegeACgnIAAlOQAAgrAdgeICtiuQAXgYApAAIFSAAQAqAAAXAYICtCuQAdAfAAAqIAABuQAAARgQAAIgzAAIAAgkQAAgWgEgHQgGgLgQAAIgXAAQgQAAgGALQgFAIAAAVIAAAkIgjAAQgWABgJAEQgKAGAAAQIAAAXQAAARAKAFQAJAFAWAAIAjAAIAAAkQAAAVAFAIQAGALAQAAIAXAAQAQAAAGgLQAEgHAAgWIAAgkIAzAAQAPAAABAPIAABzQAAApgcAcIipCqQgeAcgoAAgAiKiyQgVAsAACgQAAB7AZAsQAfA1BgAAQBjAAAeg7QAXgtAAiNQAAiKgXgsQgdg5hkAAQhoAAgbA8gAhFCMQgLgTAAhAIAAhpQAAhAALgUQAOgbAwABQAwgBAOAaQAKAUAABAIAABoQAABBgKAUQgOAagwAAQgwAAgOgag");
	this.shape.setTransform(336.9946,-28.1068,0.1833,0.1831);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// black1
	this.black1 = new lib.Symbol1();
	this.black1.name = "black1";
	this.black1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.black1).wait(1));

	// logo1
	this.logo1 = new lib.Symbol11();
	this.logo1.name = "logo1";
	this.logo1.parent = this;
	this.logo1.setTransform(-108,0,0.8131,0.8131);

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(1));

	// txt3
	this.txt3 = new lib.Symbol18copy2();
	this.txt3.name = "txt3";
	this.txt3.parent = this;
	this.txt3.setTransform(-98.95,13.7,0.7447,0.7447,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// txt2
	this.txt2 = new lib.Symbol18copy();
	this.txt2.name = "txt2";
	this.txt2.parent = this;
	this.txt2.setTransform(-99,3.7,0.7447,0.7447,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// txt1
	this.txt1 = new lib.Symbol18();
	this.txt1.name = "txt1";
	this.txt1.parent = this;
	this.txt1.setTransform(-99,3.7,0.7447,0.7447,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// logo2
	this.logo2 = new lib.Symbol2();
	this.logo2.name = "logo2";
	this.logo2.parent = this;
	this.logo2.setTransform(124.25,3.3,0.7649,0.7649,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// bt
	this.bt = new lib.Symbol22();
	this.bt.name = "bt";
	this.bt.parent = this;
	this.bt.setTransform(270,8);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// pic
	this.pic = new lib.Symbol16();
	this.pic.name = "pic";
	this.pic.parent = this;
	this.pic.setTransform(85.1,1.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

	// bg
	this.bg = new lib.Symbol1();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(-364,-60.3,728,122.69999999999999), null);


// stage content:
(lib.index_728x90_yandex = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686866").s().p("Egw5AHCIAAgKMBpnAAAIAAtvMhpnAAAIAAgKMBpxAAAIAAODgEg43AHCIAAuDIH+AAIAAAKIn0AAIAANvIH0AAIAAAKg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mc
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(364.1,45.7,1,1,0,0,0,0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,29.7,364,77.7);
// library properties:
lib.properties = {
	id: '17BB32819C4558429DAE13ECB7AF2AE6',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1566553998113", id:"bg"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['17BB32819C4558429DAE13ECB7AF2AE6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;