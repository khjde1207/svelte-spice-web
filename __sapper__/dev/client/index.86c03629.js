import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as stores$1, v as validate_store, c as component_subscribe, b as afterUpdate, o as onMount, e as validate_slots, t as tick, g as globals, f as space, h as element, q as query_selector_all, j as detach_dev, k as claim_space, l as claim_element, m as children, n as attr_dev, p as add_location, r as insert_dev, u as append_dev, w as noop, x as binding_callbacks } from './client.ff82de4d.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const { Object: Object_1, console: console_1 } = globals;
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
			add_location(div0, file, 97, 2, 2076);
			attr_dev(div1, "id", "spice-area");
			attr_dev(div1, "class", "svelte-16arozt");
			add_location(div1, file, 96, 1, 2052);
			attr_dev(main, "class", "svelte-16arozt");
			add_location(main, file, 95, 0, 2044);
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
	component_subscribe($$self, page, value => $$invalidate(4, $page = value));
	let SpiceHtml5 = null;
	let domspice;
	let sc = {};

	// $: {
	// };
	async function watch() {
		console.log(" p[[[[[[[[[[[[[[[[[ >>  ", sc.display);

		if (sc) {
			await tick();
		}
	}

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

		sctmp = new SpiceHtml5.SpiceMainConn({
				uri: url + ":" + port,
				screen_id: "spice-screen",
				password
			});

		Object.assign(sc, sctmp);
	}); // console.log(sc)
	// console.log(sc.display)
	//display
	// setTimeout(()=>{

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
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
		watch,
		$page
	});

	$$self.$inject_state = $$props => {
		if ("SpiceHtml5" in $$props) SpiceHtml5 = $$props.SpiceHtml5;
		if ("domspice" in $$props) $$invalidate(0, domspice = $$props.domspice);
		if ("sc" in $$props) $$invalidate(7, sc = $$props.sc);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	 watch();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODZjMDM2MjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgPlxuXHRpbXBvcnQgeyBvbk1vdW50LCB0aWNrLCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSdcblx0aW1wb3J0IHsgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuXHRjb25zdCB7IHByZWxvYWRpbmcsIHBhZ2UsIHNlc3Npb24gfSA9IHN0b3JlcygpO1xuXHRsZXQgU3BpY2VIdG1sNSA9IG51bGw7XG5cdGxldCBkb21zcGljZTsgXG5cdGxldCBzYyAgPSB7fTtcblx0JDogd2F0Y2goc2MpO1xuXHQvLyAkOiB7XG5cdFx0XG5cdC8vIH07XG5cblx0YXN5bmMgZnVuY3Rpb24gd2F0Y2goKXtcblx0XHRjb25zb2xlLmxvZygnIHBbW1tbW1tbW1tbW1tbW1tbWyA+PiAgJyAsIHNjLmRpc3BsYXkpO1xuXHRcdGlmKHNjKXtcblx0XHRcdGF3YWl0IHRpY2soKTtcblx0XHR9XG5cdH1cblxuXHRhZnRlclVwZGF0ZShhc3luYyAoKT0+e1xuXHRcdGF3YWl0IHRpY2soKVxuXHRcdC8vIGNvbnNvbGUubG9nKGRvbXNwaWNlLmNoaWxkcmVuKVxuXHR9KVxuXHRvbk1vdW50KGFzeW5jICgpID0+IHsgXG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocHJlbG9hZGluZywgICRwYWdlLnF1ZXJ5LCBzZXNzaW9uKSBcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy9zcGljZS1odG1sNS9zcmMvbWFpbi5qcycpO1xuXHRcdFNwaWNlSHRtbDUgPSBtb2R1bGU7XG5cdFx0bGV0ICB7dXJsLHBvcnQscGFzc3dvcmQsfT0gJHBhZ2UucXVlcnlcblx0XHQvLyBsZXQgcGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcblx0XHQvLyBsZXQgdXJsID0gcGFyYW0uZ2V0KCd1cmwnKSB8fCAnbG9jYWxob3N0Jztcblx0XHQvLyBsZXQgcG9ydCA9IHBhcmFtLmdldCgncG9ydCcpIHx8ICc1OTU5Jztcblx0XHQvLyBsZXQgcGFzc3dvcmQgPSBwYXJhbS5nZXQoJ3Bhc3N3b3JkJykgfHwgJyc7XG5cdFx0aWYodXJsLmluZGV4T2YoJ3dzJykgPCAwKXtcblx0XHRcdHVybCA9ICd3czovLycrdXJsO1xuXHRcdH1cblx0XHRpZihwYXNzd29yZCl7IFxuXHRcdFx0bGV0IGFkZHJlc3N1cmwgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShgJnBhc3N3b3JkPSR7cGFzc3dvcmR9YCAsICcnKVxuXHRcdFx0Ly8gaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGFkZHJlc3N1cmwpO1xuXHRcdH1cblx0XHRzY3RtcCA9IG5ldyBTcGljZUh0bWw1LlNwaWNlTWFpbkNvbm4oe3VyaTogdXJsKyc6Jytwb3J0LCBzY3JlZW5faWQ6IFwic3BpY2Utc2NyZWVuXCIsIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcblx0XHRPYmplY3QuYXNzaWduKHNjLCBzY3RtcCk7XG5cdFx0Ly8gY29uc29sZS5sb2coc2MpXG5cdFx0Ly8gY29uc29sZS5sb2coc2MuZGlzcGxheSlcblx0XHQvL2Rpc3BsYXlcblx0XHRcblx0XHQvLyBzZXRUaW1lb3V0KCgpPT57XG5cdFx0Ly8gfSwgNTAwKVxuXHRcdC8vIE15Q29tcG9uZW50ID0gbW9kdWxlLmRlZmF1bHQ7XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0I3NwaWNlLWFyZWFcblx0eyBcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0Ym9yZGVyOiBzb2xpZCAjMjIyMjIyIDFweDtcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHQtbW96LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHRib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHRtYWluIHsgXG5cdFx0XG5cdFx0cGFkZGluZzogMWVtO1xuXHRcdG1hcmdpbjogMCBhdXRvOyBcblx0fVxuXG5cdGgxIHtcblx0XHRjb2xvcjogI2ZmM2UwMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdH1cblx0LyogLnNwaWNlLXNjcmVlbntcblx0XHRtYXgtd2lkdGg6IDMwMHB4O1xuXHR9ICovXG5cblx0LyogQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0bWFpbiB7XG5cdFx0XHRtYXgtd2lkdGg6IG5vbmU7XG5cdFx0fVxuXHR9ICovXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbj5cblx0PGRpdiBpZD1cInNwaWNlLWFyZWFcIj5cblx0XHQ8ZGl2IGJpbmQ6dGhpcz17ZG9tc3BpY2V9IGlkPVwic3BpY2Utc2NyZWVuXCIgY2xhc3M9XCJzcGljZS1zY3JlZW5cIj48L2Rpdj5cblx0PC9kaXY+XG48L21haW4+XG4iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBR1MsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEtBQUtBLFFBQU07OztLQUN4QyxVQUFVLEdBQUcsSUFBSTtLQUNqQixRQUFRO0tBQ1IsRUFBRTs7OztnQkFNUyxLQUFLO0VBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUcsRUFBRSxDQUFDLE9BQU87O01BQ2hELEVBQUU7U0FDRSxJQUFJOzs7O0NBSVosV0FBVztRQUNKLElBQUk7OztDQUdYLE9BQU87O1FBR0EsTUFBTSxnQkFBZ0Isd0NBQTBCOztFQUN0RCxVQUFVLEdBQUcsTUFBTTtRQUNiLEdBQUcsRUFBQyxJQUFJLEVBQUMsUUFBUSxLQUFJLEtBQUssQ0FBQyxLQUFLOzs7Ozs7TUFLbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztHQUN2QixHQUFHLEdBQUcsT0FBTyxHQUFDLEdBQUc7OztNQUVmLFFBQVE7T0FDTixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLGNBQWMsUUFBUSxJQUFLLEVBQUU7OztFQUd0RSxLQUFLLE9BQU8sVUFBVSxDQUFDLGFBQWE7SUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFDLEdBQUcsR0FBQyxJQUFJO0lBQUUsU0FBUyxFQUFFLGNBQWM7SUFBWSxRQUFROzs7RUFDdEcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3RFAsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUZ0QixLQUFLLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
