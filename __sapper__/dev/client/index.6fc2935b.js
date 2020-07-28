import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as stores$1, v as validate_store, c as component_subscribe, b as afterUpdate, o as onMount, e as validate_slots, t as tick, g as globals, f as space, h as element, q as query_selector_all, j as detach_dev, k as claim_space, l as claim_element, m as children, n as attr_dev, p as add_location, r as insert_dev, u as append_dev, w as noop, x as binding_callbacks } from './client.1afed4a6.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t;
	let main;
	let div1;
	let div0;

	const block = {
		c: function create() {
			t = space();
			main = element("main");
			div1 = element("div");
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1n29hcr\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div1 = claim_element(main_nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper ";
			attr_dev(div0, "id", "spice-screen");
			attr_dev(div0, "class", "spice-screen");
			add_location(div0, file, 88, 2, 1940);
			attr_dev(div1, "id", "spice-area");
			attr_dev(div1, "class", "svelte-16arozt");
			add_location(div1, file, 87, 1, 1916);
			attr_dev(main, "class", "svelte-16arozt");
			add_location(main, file, 86, 0, 1908);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, div1);
			append_dev(div1, div0);
			/*div0_binding*/ ctx[2](div0);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(main);
			/*div0_binding*/ ctx[2](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $page;
	const { preloading, page, session } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(5, $page = value));
	let SpiceHtml5 = null;
	let domspice;

	afterUpdate(async () => {
		await tick();
	}); // console.log(domspice.children)

	onMount(async () => {
		// console.log(preloading,  $page.query, session) 
		const module = await import('../../../../../spice-html5/src/main.js');

		SpiceHtml5 = module;
		let { url, port, password } = $page.query;

		// let param = new URLSearchParams(location.search)
		// let url = param.get('url') || 'localhost';
		// let port = param.get('port') || '5959';
		// let password = param.get('password') || '';
		if (url.indexOf("ws") < 0) {
			url = "ws://" + url;
		}

		if (password) {
			let addressurl = location.search.replace(`&password=${password}`, "");
		} // history.pushState({}, "", addressurl);

		$$invalidate(4, sc = new SpiceHtml5.SpiceMainConn({
				uri: url + ":" + port,
				screen_id: "spice-screen",
				password
			}));

		console.log(sc);
		console.log(sc.display);
	}); //display
	// setTimeout(()=>{
	// }, 500)
	// MyComponent = module.default;

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			domspice = $$value;
			$$invalidate(0, domspice);
		});
	}

	$$self.$capture_state = () => ({
		onMount,
		tick,
		afterUpdate,
		stores: stores$1,
		preloading,
		page,
		session,
		SpiceHtml5,
		domspice,
		sc,
		$page
	});

	$$self.$inject_state = $$props => {
		if ("SpiceHtml5" in $$props) SpiceHtml5 = $$props.SpiceHtml5;
		if ("domspice" in $$props) $$invalidate(0, domspice = $$props.domspice);
		if ("sc" in $$props) $$invalidate(4, sc = $$props.sc);
	};

	let sc;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*sc*/ 16) {
			 $$invalidate(4, sc = () => {
				console.log(" p[[[[[[[[[[[[[[[[[ ", sc);
			});
		}
	};

	return [domspice, page, div0_binding];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmZjMjkzNWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgPlxuXHRpbXBvcnQgeyBvbk1vdW50LCB0aWNrLCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSdcblx0aW1wb3J0IHsgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuXHRjb25zdCB7IHByZWxvYWRpbmcsIHBhZ2UsIHNlc3Npb24gfSA9IHN0b3JlcygpO1xuXHRsZXQgU3BpY2VIdG1sNSA9IG51bGw7XG5cdGxldCBkb21zcGljZTsgXG5cdCQ6IHNjID0gKCk9Pntcblx0XHRjb25zb2xlLmxvZygnIHBbW1tbW1tbW1tbW1tbW1tbWyAnICwgc2MpIFxuXHR9O1xuXG5cdGFmdGVyVXBkYXRlKGFzeW5jICgpPT57XG5cdFx0YXdhaXQgdGljaygpXG5cdFx0Ly8gY29uc29sZS5sb2coZG9tc3BpY2UuY2hpbGRyZW4pXG5cdH0pXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4geyBcblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhwcmVsb2FkaW5nLCAgJHBhZ2UucXVlcnksIHNlc3Npb24pIFxuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnL3NwaWNlLWh0bWw1L3NyYy9tYWluLmpzJyk7XG5cdFx0U3BpY2VIdG1sNSA9IG1vZHVsZTtcblx0XHRsZXQgIHt1cmwscG9ydCxwYXNzd29yZCx9PSAkcGFnZS5xdWVyeVxuXHRcdC8vIGxldCBwYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuXHRcdC8vIGxldCB1cmwgPSBwYXJhbS5nZXQoJ3VybCcpIHx8ICdsb2NhbGhvc3QnO1xuXHRcdC8vIGxldCBwb3J0ID0gcGFyYW0uZ2V0KCdwb3J0JykgfHwgJzU5NTknO1xuXHRcdC8vIGxldCBwYXNzd29yZCA9IHBhcmFtLmdldCgncGFzc3dvcmQnKSB8fCAnJztcblx0XHRpZih1cmwuaW5kZXhPZignd3MnKSA8IDApe1xuXHRcdFx0dXJsID0gJ3dzOi8vJyt1cmw7XG5cdFx0fVxuXHRcdGlmKHBhc3N3b3JkKXsgXG5cdFx0XHRsZXQgYWRkcmVzc3VybCA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKGAmcGFzc3dvcmQ9JHtwYXNzd29yZH1gICwgJycpXG5cdFx0XHQvLyBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgYWRkcmVzc3VybCk7XG5cdFx0fVxuXHRcdHNjID0gbmV3IFNwaWNlSHRtbDUuU3BpY2VNYWluQ29ubih7dXJpOiB1cmwrJzonK3BvcnQsIHNjcmVlbl9pZDogXCJzcGljZS1zY3JlZW5cIiwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKHNjKVxuXHRcdGNvbnNvbGUubG9nKHNjLmRpc3BsYXkpXG5cdFx0Ly9kaXNwbGF5XG5cdFx0XG5cdFx0Ly8gc2V0VGltZW91dCgoKT0+e1xuXHRcdC8vIH0sIDUwMClcblx0XHQvLyBNeUNvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0O1xuXHR9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdCNzcGljZS1hcmVhXG5cdHsgXG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdGJvcmRlcjogc29saWQgIzIyMjIyMiAxcHg7XG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0LW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRcdC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcblx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0bWFpbiB7IFxuXHRcdFxuXHRcdHBhZGRpbmc6IDFlbTtcblx0XHRtYXJnaW46IDAgYXV0bzsgXG5cdH1cblxuXHRoMSB7XG5cdFx0Y29sb3I6ICNmZjNlMDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDRlbTtcblx0XHRmb250LXdlaWdodDogMTAwO1xuXHR9XG5cdC8qIC5zcGljZS1zY3JlZW57XG5cdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0fSAqL1xuXG5cdC8qIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdG1haW4ge1xuXHRcdFx0bWF4LXdpZHRoOiBub25lO1xuXHRcdH1cblx0fSAqL1xuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPG1haW4+XG5cdDxkaXYgaWQ9XCJzcGljZS1hcmVhXCI+XG5cdFx0PGRpdiBiaW5kOnRoaXM9e2RvbXNwaWNlfSBpZD1cInNwaWNlLXNjcmVlblwiIGNsYXNzPVwic3BpY2Utc2NyZWVuXCI+PC9kaXY+XG5cdDwvZGl2PlxuPC9tYWluPlxuIl0sIm5hbWVzIjpbInN0b3JlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdTLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxLQUFLQSxRQUFNOzs7S0FDeEMsVUFBVSxHQUFHLElBQUk7S0FDakIsUUFBUTs7Q0FLWixXQUFXO1FBQ0osSUFBSTs7O0NBR1gsT0FBTzs7UUFHQSxNQUFNLGdCQUFnQix3Q0FBMEI7O0VBQ3RELFVBQVUsR0FBRyxNQUFNO1FBQ2IsR0FBRyxFQUFDLElBQUksRUFBQyxRQUFRLEtBQUksS0FBSyxDQUFDLEtBQUs7Ozs7OztNQUtuQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0dBQ3ZCLEdBQUcsR0FBRyxPQUFPLEdBQUMsR0FBRzs7O01BRWYsUUFBUTtPQUNOLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sY0FBYyxRQUFRLElBQUssRUFBRTs7O2tCQUd0RSxFQUFFLE9BQU8sVUFBVSxDQUFDLGFBQWE7SUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFDLEdBQUcsR0FBQyxJQUFJO0lBQUUsU0FBUyxFQUFFLGNBQWM7SUFBWSxRQUFROzs7RUFFbkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0VBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRE4sUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWxGdEIsRUFBRTtJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
