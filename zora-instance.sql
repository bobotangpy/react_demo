--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: cart; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cart (
    cart_id integer NOT NULL,
    userstable_id integer,
    clothes_id integer,
    price character varying(255),
    quantity integer,
    size character varying(255)
);


--
-- Name: cart_cart_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cart_cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cart_cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cart_cart_id_seq OWNED BY public.cart.cart_id;


--
-- Name: clothes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clothes (
    clothes_id integer NOT NULL,
    name character varying,
    style_id integer,
    type_id integer,
    gender_id integer,
    price character varying(255),
    img character varying(255),
    horoscope_id character varying(255)
);


--
-- Name: clothes_clothes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clothes_clothes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clothes_clothes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clothes_clothes_id_seq OWNED BY public.clothes.clothes_id;


--
-- Name: horoscope; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.horoscope (
    id integer NOT NULL,
    horoscope character varying(255)
);


--
-- Name: horoscope_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.horoscope_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: horoscope_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.horoscope_id_seq OWNED BY public.horoscope.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: orderhistory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orderhistory (
    orderhistory_id integer NOT NULL,
    userstable_id integer,
    clothes_id integer,
    price character varying(255),
    quantity integer,
    size character varying(255),
    total character varying(255),
    order_date timestamp with time zone
);


--
-- Name: orderhistory_orderhistory_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orderhistory_orderhistory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orderhistory_orderhistory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orderhistory_orderhistory_id_seq OWNED BY public.orderhistory.orderhistory_id;


--
-- Name: userstable; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.userstable (
    id integer NOT NULL,
    name character varying(255),
    password character varying(255),
    horoscope character varying(255),
    email character varying(255)
);


--
-- Name: userstable_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.userstable_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userstable_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.userstable_id_seq OWNED BY public.userstable.id;


--
-- Name: cart cart_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart ALTER COLUMN cart_id SET DEFAULT nextval('public.cart_cart_id_seq'::regclass);


--
-- Name: clothes clothes_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clothes ALTER COLUMN clothes_id SET DEFAULT nextval('public.clothes_clothes_id_seq'::regclass);


--
-- Name: horoscope id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.horoscope ALTER COLUMN id SET DEFAULT nextval('public.horoscope_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: orderhistory orderhistory_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orderhistory ALTER COLUMN orderhistory_id SET DEFAULT nextval('public.orderhistory_orderhistory_id_seq'::regclass);


--
-- Name: userstable id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userstable ALTER COLUMN id SET DEFAULT nextval('public.userstable_id_seq'::regclass);


--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cart (cart_id, userstable_id, clothes_id, price, quantity, size) FROM stdin;
1	27	353	HKD$423.28	1	XS
2	27	326	HKD$402.99	1	XS
\.


--
-- Data for Name: clothes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.clothes (clothes_id, name, style_id, type_id, gender_id, price, img, horoscope_id) FROM stdin;
11	Head Over Heels Hazen black patent flat shoes	1	1	1	HKD$190.48	https://images.asos-media.com/products/head-over-heels-hazen-black-patent-flat-shoes/11916217-1-blackcroc?$n_480w$&wid=476&fit=constrain	Sagittarius
13	adidas Originals Adilette black and white slider	1	1	1	HKD$317.46	https://images.asos-media.com/products/adidas-originals-adilette-black-and-white-slider/10979206-1-black?$n_480w$&wid=476&fit=constrain	Aquarius
14	Nike Black Kawa Swoosh Slider	1	1	1	HKD$190.48	https://images.asos-media.com/products/nike-black-kawa-swoosh-slider/11115382-1-blackwhite?$n_480w$&wid=476&fit=constrain	Pisces
15	RAID Wink bright red square toe block heeled sandals	1	1	1	HKD$264.44	https://images.asos-media.com/products/raid-wink-bright-red-square-toe-block-heeled-sandals/11608609-1-redmicro?$n_480w$&wid=476&fit=constrain	Taurus
16	RAID Katy grey block heeled shoes	1	1	1	HKD$317.35	https://images.asos-media.com/products/raid-katy-grey-block-heeled-shoes/11608764-1-lightgreysuede?$n_480w$&wid=476&fit=constrain	Gemini
18	New Look lace up flat boots in black	1	1	1	HKD$296.19	https://images.asos-media.com/products/new-look-lace-up-flat-boots-in-black/12710328-1-black?$n_480w$&wid=476&fit=constrain	Leo
19	Birkenstock Arizona Eva Black Flat Sandals	1	1	1	HKD$317.46	https://images.asos-media.com/products/birkenstock-arizona-eva-black-flat-sandals/9974994-1-black?$n_480w$&wid=476&fit=constrain	Virgo
20	Glamorous clear black jelly two strap flat sandal	1	1	1	HKD$126.98	https://images.asos-media.com/products/glamorous-clear-black-jelly-two-strap-flat-sandal/11786972-1-blackmattjelly?$n_480w$&wid=476&fit=constrain	Libra
9	New Look court shoes in tan	2	1	1	HKD$211.53	https://images.asos-media.com/products/new-look-court-shoes-in-tan/13192761-1-tan?$n_480w$&wid=476&fit=constrain	Libra
7	New Look faux suede heeled shoes in black	2	1	1	HKD$200.95	https://images.asos-media.com/products/new-look-faux-suede-heeled-shoes-in-black/12862342-1-black?$n_480w$&wid=476&fit=constrain	Virgo
6	Stradivarius faux suede heeled shoe in black	2	1	1	HKD$275.03	https://images.asos-media.com/products/stradivarius-faux-suede-heeled-shoe-in-black/13165914-1-black?$n_480w$&wid=476&fit=constrain	Leo
5	Pimkie high heeled shoes in black	2	1	1	HKD$232.70	https://images.asos-media.com/products/pimkie-high-heeled-shoes-in-black/12281955-1-black?$n_480w$&wid=476&fit=constrain	Cancer
4	River Island tassel loafer in burgundy	2	1	1	HKD$370.37	https://images.asos-media.com/products/river-island-tassel-loafer-in-burgundy/11971504-1-reddark?$n_480w$&wid=476&fit=constrain	Gemini
3	River Island tassel loafer in black	2	1	1	HKD$370.37	https://images.asos-media.com/products/river-island-tassel-loafer-in-black/11971482-1-black?$n_480w$&wid=476&fit=constrain	Taurus
2	New Look chunky patent loafers in black	2	1	1	HKD$275.03	https://images.asos-media.com/products/new-look-chunky-patent-loafers-in-black/12710309-1-black?$n_480w$&wid=476&fit=constrain	Aries
1	Stradivarius faux suede mid heel shoes in black	2	1	1	HKD$211.53	https://images.asos-media.com/products/stradivarius-faux-suede-mid-heel-shoes-in-black/13166483-1-black?$n_480w$&wid=476&fit=constrain	Pisces
25	RAID Adorn black strappy flat shoes	3	1	1	HKD$264.44	https://images.asos-media.com/products/raid-adorn-black-strappy-flat-shoes/12445098-1-blacksuede?$n_480w$&wid=476&fit=constrain	Capricorn
30	RAID Myla black ankle strap flat shoes	3	1	1	HKD$243.28	https://images.asos-media.com/products/raid-myla-black-ankle-strap-flat-shoes/12035607-1-bk1black1?$n_480w$&wid=476&fit=constrain	Virgo
29	Public Desire Clarity White clear heel ankle tie court shoes	3	1	1	HKD$317.35	https://images.asos-media.com/products/public-desire-clarity-white-clear-heel-ankle-tie-court-shoes/12389215-1-whitepu?$n_480w$&wid=476&fit=constrain	Leo
28	Glamorous silver metallic pointed heeled shoes	3	1	1	HKD$253.97	https://images.asos-media.com/products/glamorous-silver-metallic-pointed-heeled-shoes/11790095-1-silvermetallic?$n_480w$&wid=476&fit=constrain	Cancer
27	Public Desire Classy black tie up heeled shoes	3	1	1	HKD$317.35	https://images.asos-media.com/products/public-desire-classy-black-tie-up-heeled-shoes/12240185-1-blacksuede?$n_480w$&wid=476&fit=constrain	Gemini
26	Public Desire Volt tie up heeled shoes	3	1	1	HKD$317.35	https://images.asos-media.com/products/public-desire-volt-tie-up-heeled-shoes/12384729-1-blushsuede?$n_480w$&wid=476&fit=constrain	Taurus
12	ASOS DESIGN Finland tie leg flat sandals in black	1	1	1	HKD$126.99	https://images.asos-media.com/products/asos-design-finland-tie-leg-flat-sandals-in-black/13512706-1-black?$XXL$&wid=513&fit=constrain	Capricorn
24	Public Desire Clarity blush clear heel ankle tie court shoes	3	1	1	HKD$317.35	https://images.asos-media.com/products/public-desire-clarity-blush-clear-heel-ankle-tie-court-shoes/12264848-1-blush?$n_480w$&wid=476&fit=constrain	Capricorn
23	Pimkie high heeled shoes in black	3	1	1	HKD$232.70	https://images.asos-media.com/products/pimkie-high-heeled-shoes-in-black/12281955-1-black?$n_480w$&wid=476&fit=constrain	Aquarius
22	Public Desire Exclusive Stush studded heeled court shoe in grey	3	1	1	HKD$349.10	https://images.asos-media.com/products/public-desire-exclusive-stush-studded-heeled-court-shoe-in-grey/12878753-1-greymf?$n_480w$&wid=476&fit=constrain	Sagittarius
21	Public Desire Compose elasticated detail court shoes in black	3	1	1	HKD$317.35	https://images.asos-media.com/products/public-desire-compose-elasticated-detail-court-shoes-in-black/13053146-1-blackmf?$n_480w$&wid=476&fit=constrain	Scorpio
10	New Look slingback block heeled shoes in dark yellow croc	2	1	1	HKD$211.53	https://images.asos-media.com/products/new-look-slingback-block-heeled-shoes-in-dark-yellow-croc/12364963-1-yellow?$n_480w$&wid=476&fit=constrain	Scorpio
17	RAID Harper two part flat sandals in snake	1	1	1	HKD$243.99	https://images.asos-media.com/products/raid-harper-two-part-flat-sandals-in-snake/14096510-1-beigesnakepu?$XXL$&wid=513&fit=constrain	Cancer
8	Glamorous silver metallic pointed heeled shoes	2	1	1	HKD$253.97	https://images.asos-media.com/products/glamorous-silver-metallic-pointed-heeled-shoes/11790095-1-silvermetallic?$n_480w$&wid=476&fit=constrain	Capricorn
51	New Look rose heart girlfriend tee in black	1	2	1	HKD$95.13	https://images.asos-media.com/products/new-look-rose-heart-girlfriend-tee-in-black/13556516-1-black?$n_480w$&wid=476&fit=constrain	Taurus
52	Weekday Sandy Long Sleeve in Black	1	2	1	HKD$211.64	https://images.asos-media.com/products/weekday-sandy-long-sleeve-in-black/13552795-1-black?$n_480w$&wid=476&fit=constrain	Gemini
53	New Look tie front tee in white	1	2	1	HKD$95.13	https://images.asos-media.com/products/new-look-tie-front-tee-in-white/13412311-1-white?$n_480w$&wid=476&fit=constrain	Cancer
54	Dickies ringer t-shirt with large front logo	1	2	1	HKD$264.55	https://images.asos-media.com/products/dickies-ringer-t-shirt-with-large-front-logo/13170059-1-amber?$n_480w$&wid=476&fit=constrain	Leo
56	New Look organic roll sleeve tee in white	1	2	1	HKD$73.97	https://images.asos-media.com/products/new-look-organic-roll-sleeve-tee-in-white/13202081-1-white?$n_480w$&wid=476&fit=constrain	Libra
57	Puma Essentials Logo t-shirt in white	1	2	1	HKD$126.98	https://images.asos-media.com/products/puma-essentials-logo-t-shirt-in-white/13187202-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
60	Puma Essentials+ black logo cropped hoodie	1	2	1	HKD$317.46	https://images.asos-media.com/products/puma-essentials-black-logo-cropped-hoodie/12076513-1-pumablack?$n_480w$&wid=476&fit=constrain	Aquarius
40	Missguided barely there heeled sandals with square toe in terracotta	0	1	1	HKD$232.80	https://images.asos-media.com/products/missguided-barely-there-heeled-sandals-with-square-toe-in-terracotta/13321856-1-orange?$n_480w$&wid=476&fit=constrain	Gemini
58	Nike high neck vest crop top in black	1	2	1	HKD$179.99	https://images.asos-media.com/products/nike-high-neck-vest-crop-top-in-black/14033764-1-black?$XXL$&wid=513&fit=constrain	Sagittarius
38	Z_Code_Z Exclusive Boba black toe loop mules with whipstitch detail	0	1	1	HKD$338.62	https://images.asos-media.com/products/zcodez-exclusive-boba-black-toe-loop-mules-with-whipstitch-detail/12838821-1-black?$n_480w$&wid=476&fit=constrain	Taurus
37	Z_Code_Z Exclusive Femi red block heeled sandals	0	1	1	HKD$317.46	https://images.asos-media.com/products/zcodez-exclusive-femi-red-block-heeled-sandals/12836433-1-redpu?$n_480w$&wid=476&fit=constrain	Aries
36	New Look block heel sock boot in black	0	1	1	HKD$317.35	https://images.asos-media.com/products/new-look-block-heel-sock-boot-in-black/13183017-1-black?$n_480w$&wid=476&fit=constrain	Pisces
35	Pull&Bear faux suede wrap tie sandals in lilac	0	1	1	HKD$275.03	https://images.asos-media.com/products/pullbear-faux-suede-wrap-tie-sandals-in-lilac/12889370-1-lilac?$n_480w$&wid=476&fit=constrain	Aquarius
34	Missguided chunky croc Chelsea ankle boots in black	0	1	1	HKD$296.30	https://images.asos-media.com/products/missguided-chunky-croc-chelsea-ankle-boots-in-black/13321845-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
33	Koi Vegan chunky shoes in black	0	1	1	HKD$370.37	https://images.asos-media.com/products/koi-vegan-chunky-shoes-in-black/13309517-1-blackpu?$n_480w$&wid=476&fit=constrain	Sagittarius
49	River Island blouse with belt in beige	2	2	1	HKD$338.62	https://images.asos-media.com/products/river-island-blouse-with-belt-in-beige/12098437-1-beige?$n_480w$&wid=476&fit=constrain	Pisces
48	Neon Rose wrap blouse with belted waist	2	2	1	HKD$338.62	https://images.asos-media.com/products/neon-rose-wrap-blouse-with-belted-waist/12622580-1-whiteorangestitch?$n_480w$&wid=476&fit=constrain	Aquarius
47	Fashion Union button down shirt in satin	2	2	1	HKD$296.30	https://images.asos-media.com/products/fashion-union-button-down-shirt-in-satin/12774957-1-turquoise?$n_480w$&wid=476&fit=constrain	Capricorn
46	PrettyLittleThing wrap shirt blouse with belted waist in pink geo print	2	2	1	HKD$264.55	https://images.asos-media.com/products/prettylittlething-wrap-shirt-blouse-with-belted-waist-in-pink-geo-print/12720219-1-multi?$n_480w$&wid=476&fit=constrain	Sagittarius
45	Pimkie longline blazer in black	2	2	1	HKD$179.79	https://images.asos-media.com/products/pimkie-longline-blazer-in-black/12726159-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
44	New Look ruched sleeve detail blazer in black	2	2	1	HKD$317.35	https://images.asos-media.com/products/new-look-ruched-sleeve-detail-blazer-in-black/13036112-1-black?$n_480w$&wid=476&fit=constrain	Libra
43	COLLUSION check print blazer	2	2	1	HKD$317.46	https://images.asos-media.com/products/collusion-tall-check-print-blazer/11779280-1-multi?$n_480w$&wid=476&fit=constrain	Virgo
42	Stradivarius flowy blazer in checks	2	2	1	HKD$275.03	https://images.asos-media.com/products/stradivarius-flowy-blazer-in-checks/12706576-1-grey?$n_480w$&wid=476&fit=constrain	Leo
41	Stradivarius ruched sleeved blazer in black	2	2	1	HKD$317.35	https://images.asos-media.com/products/stradivarius-ruched-sleeved-blazer-in-black/11721647-1-black?$n_480w$&wid=476&fit=constrain	Cancer
39	New Look suedette flat chelsea boots in black	0	1	1	HKD$275.03	https://images.asos-media.com/products/new-look-suedette-flat-chelsea-boots-in-black/13393565-1-black?$n_480w$&wid=476&fit=constrain	Libra
63	PrettyLittleThing leather look blouse with puff sleeves and belted waist in dark green	3	2	1	HKD$232.80	https://images.asos-media.com/products/prettylittlething-leather-look-blouse-with-puff-sleeves-and-belted-waist-in-dark-green/13387753-1-green?$n_480w$&wid=476&fit=constrain	Taurus
62	Public Desire structured cami crop top with chain straps in satin	3	2	1	HKD$243.28	https://images.asos-media.com/products/public-desire-structured-cami-crop-top-with-chain-straps-in-satin/12798180-1-black?$n_480w$&wid=476&fit=constrain	Aries
50	Miss Selfridge blouse with collar in check	2	2	1	HKD$317.46	https://images.asos-media.com/products/miss-selfridge-blouse-with-collar-in-check/11649092-1-blue?$n_480w$&wid=476&fit=constrain	Aries
59	LOOKBOOK DESIGN long sleeve soft shirt in mixed animal scarf print	1	2	1	HKD$296.99	https://images.asos-media.com/products/asos-design-long-sleeve-soft-shirt-in-mixed-animal-scarf-print/14395307-1-multi?$XXL$&wid=513&fit=constrain	Capricorn
61	Laced In Love one shoulder frill scuba crop top in yellow	3	2	1	HKD$338.62	https://images.asos-media.com/products/laced-in-love-one-shoulder-frill-scuba-crop-top-in-yellow/13134331-1-yellow?$n_480w$&wid=476&fit=constrain	Capricorn
81	Wild Honey knitted tunic dress with pockets	1	0	1	HKD$359.79	https://images.asos-media.com/products/wild-honey-knitted-tunic-dress-with-pockets/12388116-1-camel?$n_480w$&wid=476&fit=constrain	Virgo
82	New Look tie waist detail shirt dress in black	1	0	1	HKD$211.53	https://images.asos-media.com/products/new-look-tie-waist-detail-shirt-dress-in-black/12965229-1-black?$n_480w$&wid=476&fit=constrain	Libra
83	COLLUSION fresha print mesh smock mini dress	1	0	1	HKD$211.64	https://images.asos-media.com/products/collusion-fresha-print-mesh-smock-mini-dress/12972701-1-multi?$n_480w$&wid=476&fit=constrain	Scorpio
84	Lost Ink cami midi dress in ditsy floral	1	0	1	HKD$550.26	https://images.asos-media.com/products/lost-ink-cami-midi-dress-in-ditsy-floral/13375073-1-yellowfloral?$n_480w$&wid=476&fit=constrain	Sagittarius
85	Puma Exclusive spaghetti strap washed neon dress	1	0	1	HKD$370.37	https://images.asos-media.com/products/puma-exclusive-spaghetti-strap-washed-neon-dress/12386008-1-sharpgreen?$n_480w$&wid=476&fit=constrain	Capricorn
86	adidas Originals three stripe bardot dress in red	1	0	1	HKD$370.37	https://images.asos-media.com/products/adidas-originals-three-stripe-bardot-dress-in-red/11711923-1-scarlet?$n_480w$&wid=476&fit=constrain	Aquarius
88	New Look roll neck rib jumper dress in grey	1	0	1	HKD$275.03	https://images.asos-media.com/products/new-look-roll-neck-rib-jumper-dress-in-grey/13035363-1-grey?$n_480w$&wid=476&fit=constrain	Aries
89	Wednesdays Girl midi dress in smudge spot print	1	0	1	HKD$232.80	https://images.asos-media.com/products/wednesdays-girl-midi-dress-in-smudge-spot-print/12971666-1-blacksmudgespot?$n_480w$&wid=476&fit=constrain	Taurus
90	COLLUSION check drop armhole smock mini dress	1	0	1	HKD$190.48	https://images.asos-media.com/products/collusion-check-drop-armhole-smock-mini-dress/11942293-1-multi?$n_480w$&wid=476&fit=constrain	Gemini
92	Pimkie suedette high ankle boot in camel	1	1	1	HKD$264.44	https://images.asos-media.com/products/pimkie-suedette-high-ankle-boot-in-camel/13446009-1-brown?$n_480w$&wid=476&fit=constrain	Leo
79	New Look organza sleeve blouse in red	0	2	1	HKD$137.46	https://images.asos-media.com/products/new-look-organza-sleeve-blouse-in-red/13445215-1-red?$n_480w$&wid=476&fit=constrain	Cancer
78	New Look tie front tee in white	0	2	1	HKD$95.13	https://images.asos-media.com/products/new-look-tie-front-tee-in-white/13412311-1-white?$n_480w$&wid=476&fit=constrain	Gemini
77	Boohoo shirred high neck blouse in blue	0	2	1	HKD$158.73	https://images.asos-media.com/products/boohoo-shirred-high-neck-blouse-in-blue/13408890-1-blue?$n_480w$&wid=476&fit=constrain	Taurus
76	Stradivarius cami with pearl detail in black	0	2	1	HKD$190.37	https://images.asos-media.com/products/stradivarius-cami-with-pearl-detail-in-black/13327652-1-black?$n_480w$&wid=476&fit=constrain	Aries
75	Stradivarius romantic shirt with pearl detail in white	0	2	1	HKD$275.03	https://images.asos-media.com/products/stradivarius-romantic-shirt-with-pearl-detail-in-white/13327645-1-white?$n_480w$&wid=476&fit=constrain	Pisces
74	Tommy Jeans organic square logo long sleeve t-shirt	0	2	1	HKD$370.37	https://images.asos-media.com/products/tommy-jeans-organic-square-logo-long-sleeve-t-shirt/13035398-1-rhododendron?$n_480w$&wid=476&fit=constrain	Aquarius
73	Boohoo high neck blouse in black spot print	0	2	1	HKD$190.48	https://images.asos-media.com/products/boohoo-high-neck-blouse-in-black-spot-print/13131666-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
72	River Island wrap front body with button detail in black and white	0	2	1	HKD$317.46	https://images.asos-media.com/products/river-island-wrap-front-body-with-button-detail-in-black-and-white/12989056-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
71	adidas Originals adicolor three stripe long sleeve t-shirt in white	0	2	1	HKD$349.21	https://images.asos-media.com/products/adidas-originals-adicolor-three-stripe-long-sleeve-t-shirt-in-white/11710940-1-white?$n_480w$&wid=476&fit=constrain	Scorpio
70	Club L London Tall knot front long sleeve top in red	3	2	1	HKD$232.80	https://images.asos-media.com/products/club-l-london-tall-knot-front-long-sleeve-top-in-red/13028991-1-red?$n_480w$&wid=476&fit=constrain	Pisces
69	Missguided Sonia x Fyza strappy crop top with seam detail in pink	3	2	1	HKD$211.64	https://images.asos-media.com/products/missguided-sonia-x-fyza-strappy-crop-top-with-seam-detail-in-pink/13173000-1-nude?$n_480w$&wid=476&fit=constrain	Libra
68	PrettyLittleThing peplum satin cami top with lace trim in navy	3	2	1	HKD$190.48	https://images.asos-media.com/products/prettylittlething-peplum-satin-cami-top-with-lace-trim-in-navy/13036685-1-navy?$n_480w$&wid=476&fit=constrain	Virgo
67	Saint Genies metallic crop top in green	3	2	1	HKD$158.73	https://images.asos-media.com/products/saint-genies-metallic-crop-top-in-green/13140589-1-green?$n_480w$&wid=476&fit=constrain	Pisces
66	Saint Genies Plus satin square neck crop top in ivory	3	2	1	HKD$169.31	https://images.asos-media.com/products/saint-genies-plus-satin-square-neck-crop-top-in-ivory/13108928-1-ivory?$n_480w$&wid=476&fit=constrain	Leo
65	Koco & K frill bra top with tie front in ditsy floral	3	2	1	HKD$190.48	https://images.asos-media.com/products/koco-k-frill-bra-top-with-tie-front-in-ditsy-floral/12753307-1-multi?$n_480w$&wid=476&fit=constrain	Cancer
64	Missguided bandeau satin corset top in white	3	2	1	HKD$264.55	https://images.asos-media.com/products/missguided-bandeau-satin-corset-top-in-white/13171893-1-white?$n_480w$&wid=476&fit=constrain	Gemini
91	Glamorous espadrille wedge sandal with ankle tie in black	1	1	1	HKD$296.99	https://images.asos-media.com/products/glamorous-espadrille-wedge-sandal-with-ankle-tie-in-black/14294977-1-black?$XXL$&wid=513&fit=constrain	Cancer
93	Nike Classic Cortez trainers in retro leather	1	1	1	HKD$687.99	https://images.asos-media.com/products/nike-classic-cortez-trainers-in-retro-leather/13363623-1-redwhiteblue?$XXL$&wid=513&fit=constrain	Virgo
94	adidas Originals Nizza Hi RF trainers in off white	1	1	1	HKD$740.99	https://images.asos-media.com/products/adidas-originals-nizza-hi-rf-trainers-in-off-white/13988897-1-white?$XXL$&wid=513&fit=constrain	Libra
87	River Island full skirt mini dress in black	1	0	1	HKD$423.28	https://images.asos-media.com/products/river-island-full-skirt-mini-dress-in-black/21245025-1-black?$XXL$&wid=513&fit=constrain	Pisces
96	RAID Katy grey block heeled shoes	1	1	1	HKD$317.35	https://images.asos-media.com/products/raid-katy-grey-block-heeled-shoes/11608764-1-lightgreysuede?$n_480w$&wid=476&fit=constrain	Sagittarius
97	RAID Wink blush patent square toe block heeled sandals	1	1	1	HKD$264.44	https://images.asos-media.com/products/raid-wink-blush-patent-square-toe-block-heeled-sandals/11608608-1-blushpatent?$n_480w$&wid=476&fit=constrain	Capricorn
98	New Look lace up flat boots in black	1	1	1	HKD$296.19	https://images.asos-media.com/products/new-look-lace-up-flat-boots-in-black/12710328-1-black?$n_480w$&wid=476&fit=constrain	Aquarius
99	Birkenstock Arizona Eva Black Flat Sandals	1	1	1	HKD$317.46	https://images.asos-media.com/products/birkenstock-arizona-eva-black-flat-sandals/9974994-1-black?$n_480w$&wid=476&fit=constrain	Pisces
100	Glamorous clear black jelly two strap flat sandal	1	1	1	HKD$126.98	https://images.asos-media.com/products/glamorous-clear-black-jelly-two-strap-flat-sandal/11786972-1-blackmattjelly?$n_480w$&wid=476&fit=constrain	Aries
105	adidas Originals adicolor three stripe long sleeve t-shirt in white	1	2	1	HKD$349.21	https://images.asos-media.com/products/adidas-originals-adicolor-three-stripe-long-sleeve-t-shirt-in-white/11710940-1-white?$n_480w$&wid=476&fit=constrain	Virgo
108	Miss Selfridge milk maid tee in ditsy floral print	1	2	1	HKD$296.30	https://images.asos-media.com/products/miss-selfridge-milk-maid-tee-in-ditsy-floral-print/13142845-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
109	Santa Cruz Dot t-shirt with Screaming Hand back print in washed neon green	1	2	1	HKD$253.97	https://images.asos-media.com/products/santa-cruz-dot-t-shirt-with-screaming-hand-back-print-in-washed-neon-green-exclusive-to-asos/13036675-1-gr1green1?$n_480w$&wid=476&fit=constrain	Capricorn
110	Puma Essentials+ black logo cropped hoodie	1	2	1	HKD$317.46	https://images.asos-media.com/products/puma-essentials-black-logo-cropped-hoodie/12076513-1-pumablack?$n_480w$&wid=476&fit=constrain	Aquarius
113	New Girl Order high waisted drawstring trousers in heritage check co-ord	1	3	1	HKD$359.79	https://images.asos-media.com/products/new-girl-order-high-waisted-drawstring-trousers-in-heritage-check-co-ord/13381893-1-heritagecheck?$n_480w$&wid=476&fit=constrain	Taurus
114	Miss Selfridge mini skirt with buckle detail in check	1	3	1	HKD$317.46	https://images.asos-media.com/products/miss-selfridge-mini-skirt-with-buckle-detail-in-check/12053037-1-multi?$n_480w$&wid=476&fit=constrain	Gemini
115	Puma Plus Essentials grey sweat pants	1	3	1	HKD$264.55	https://images.asos-media.com/products/puma-plus-essentials-grey-sweat-pants/12041136-1-lightgrayheather?$n_480w$&wid=476&fit=constrain	Cancer
116	Miss Selfridge mom jeans in mid wash	1	3	1	HKD$380.95	https://images.asos-media.com/products/miss-selfridge-mom-jeans-in-mid-wash/13536599-1-blue?$n_480w$&wid=476&fit=constrain	Leo
117	Monki abstract fave print midi skirt in light beige	1	3	1	HKD$317.46	https://images.asos-media.com/products/monki-abstract-fave-print-midi-skirt-in-light-beige/13382949-1-beigeprint?$n_480w$&wid=476&fit=constrain	Virgo
118	Monki floral print frill hem trousers in green	1	3	1	HKD$317.46	https://images.asos-media.com/products/monki-floral-print-frill-hem-trousers-in-green/13383262-1-green?$n_480w$&wid=476&fit=constrain	Libra
119	Monki cord skinny trousers in dark green	1	3	1	HKD$317.46	https://images.asos-media.com/products/monki-cord-skinny-trousers-in-dark-green/13382602-1-darkgreen?$n_480w$&wid=476&fit=constrain	Scorpio
120	Daisy Street midi wrap skirt in check	1	3	1	HKD$232.70	https://images.asos-media.com/products/daisy-street-midi-wrap-skirt-in-check/13288197-1-mustardcheck?$n_480w$&wid=476&fit=constrain	Sagittarius
102	Topshop square neck top in red	1	2	1	HKD$105.99	https://images.asos-media.com/products/topshop-square-neck-top-in-red/21004355-1-red?$XXL$&wid=513&fit=constrain	Gemini
103	PrettyLittleThing ruched cami crop top in white	1	2	1	HKD$95.13	https://images.asos-media.com/products/prettylittlething-ruched-cami-crop-top-in-white/20738452-1-white?$XXL$&wid=513&fit=constrain	Cancer
106	Boohoo puff sleeve ruched bodysuit in red ditsy floral	1	2	1	HKD$133.97	https://images.asos-media.com/products/boohoo-puff-sleeve-ruched-bodysuit-in-red-ditsy-floral/20738144-1-red?$XXL$&wid=513&fit=constrain	Libra
157	PrettyLittleThing cigarette trousers with split hem in black	0	3	1	HKD$158.73	https://images.asos-media.com/products/prettylittlething-cigarette-trousers-with-split-hem-in-black/13298579-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
124	Monki floral print tie waist midi skirt in black	2	3	1	HKD$317.46	https://images.asos-media.com/products/monki-floral-print-tie-waist-midi-skirt-in-black/12798827-1-black?$n_480w$&wid=476&fit=constrain	Aries
123	New Look side button down midi skirt in black	2	3	1	HKD$169.21	https://images.asos-media.com/products/new-look-side-button-down-midi-skirt-in-black/12965231-1-black?$n_480w$&wid=476&fit=constrain	Pisces
122	Weekday midi A-line skirt in beige	2	3	1	HKD$423.28	https://images.asos-media.com/products/weekday-midi-a-line-skirt-in-beige/12092136-1-khaki?$n_480w$&wid=476&fit=constrain	Aquarius
121	Bershka wrap plisse jumpsuit in black	2	3	1	HKD$264.44	https://images.asos-media.com/products/bershka-wrap-plisse-jumpsuit-in-black/12664313-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
112	Noisy May mom denim shorts in light blue	1	3	1	HKD$190.99	https://images.asos-media.com/products/noisy-may-mom-denim-shorts-in-light-blue/14341713-1-blue?$XXL$&wid=513&fit=constrain	Aries
125	Vero Moda stripe paperbag belted linen short	2	3	1	HKD$359.79	https://images.asos-media.com/products/vero-moda-stripe-paperbag-belted-linen-short/12093159-1-multi?$n_480w$&wid=476&fit=constrain	Taurus
95	Vans Classic Slip-On Tie Dye trainer in multi	1	1	1	HKD$582.99	https://images.asos-media.com/products/vans-classic-slip-on-tie-dye-trainer-in-multi/14529323-1-iftmultitruewhite?$XXL$&wid=513&fit=constrain	Scorpio
111	LOOKBOOK DESIGN oversized jogger	1	3	1	HKD$232.99	https://images.asos-media.com/products/asos-design-oversized-jogger/14240836-1-almond?$XXL$&wid=513&fit=constrain	Pisces
107	Laced In Love cut out peplum top with puff sleeve in white	1	2	1	HKD$338.99	https://images.asos-media.com/products/laced-in-love-cut-out-peplum-top-with-puff-sleeve-in-white/14679058-1-white?$XXL$&wid=513&fit=constrain	Scorpio
131	New Look satin pleated skirt in burgundy	1	3	1	HKD$243.28	https://images.asos-media.com/products/new-look-satin-pleated-skirt-in-burgundy/13656795-1-lightburgundy?$n_480w$&wid=476&fit=constrain	Scorpio
132	Boohoo chiffon midaxi skirt with ruffle trims in black	1	3	1	HKD$232.80	https://images.asos-media.com/products/boohoo-chiffon-midaxi-skirt-with-ruffle-trims-in-black/13462881-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
133	New Girl Order high waisted drawstring trousers in heritage check co-ord	1	3	1	HKD$359.79	https://images.asos-media.com/products/new-girl-order-high-waisted-drawstring-trousers-in-heritage-check-co-ord/13381893-1-heritagecheck?$n_480w$&wid=476&fit=constrain	Capricorn
134	Miss Selfridge mini skirt with buckle detail in check	1	3	1	HKD$317.46	https://images.asos-media.com/products/miss-selfridge-mini-skirt-with-buckle-detail-in-check/12053037-1-multi?$n_480w$&wid=476&fit=constrain	Aquarius
135	Puma Plus Essentials grey sweat pants	1	3	1	HKD$264.55	https://images.asos-media.com/products/puma-plus-essentials-grey-sweat-pants/12041136-1-lightgrayheather?$n_480w$&wid=476&fit=constrain	Pisces
137	Monki abstract fave print midi skirt in light beige	1	3	1	HKD$317.46	https://images.asos-media.com/products/monki-abstract-fave-print-midi-skirt-in-light-beige/13382949-1-beigeprint?$n_480w$&wid=476&fit=constrain	Taurus
155	Stradivarius trouser with button detail in black	0	3	1	HKD$190.37	https://images.asos-media.com/products/stradivarius-trouser-with-button-detail-in-black/13028001-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
154	Miss Selfridge utility trousers with belt in khaki	0	3	1	HKD$412.70	https://images.asos-media.com/products/miss-selfridge-utility-trousers-with-belt-in-khaki/12735983-1-green?$n_480w$&wid=476&fit=constrain	Libra
153	River Island faux leather zip through midi skirt in black	0	3	1	HKD$402.12	https://images.asos-media.com/products/river-island-faux-leather-zip-through-midi-skirt-in-black/12422109-1-black?$n_480w$&wid=476&fit=constrain	Virgo
152	Miss Selfridge mini skirt with buckle detail in check	0	3	1	HKD$317.46	https://images.asos-media.com/products/miss-selfridge-mini-skirt-with-buckle-detail-in-check/12053037-1-multi?$n_480w$&wid=476&fit=constrain	Leo
151	Puma Plus Essentials grey sweat pants	0	3	1	HKD$264.55	https://images.asos-media.com/products/puma-plus-essentials-grey-sweat-pants/12041136-1-lightgrayheather?$n_480w$&wid=476&fit=constrain	Cancer
129	Fashion Union pencil skirt with belt and side split in faux leather	2	3	1	HKD$338.62	https://images.asos-media.com/products/fashion-union-pencil-skirt-with-belt-and-side-split-in-faux-leather/12775128-1-black?$n_480w$&wid=476&fit=constrain	Virgo
128	Monki satin polka dot midi skirt in navy	2	3	1	HKD$317.46	https://images.asos-media.com/products/monki-satin-polka-dot-midi-skirt-in-navy/13003414-1-blue?$n_480w$&wid=476&fit=constrain	Leo
127	Fashion Union high waist tailored shorts	2	3	1	HKD$296.30	https://images.asos-media.com/products/fashion-union-high-waist-tailored-shorts/11661804-1-green?$n_480w$&wid=476&fit=constrain	Cancer
126	Parallel Lines leather look wrap front mini skirt with bow detail in tan	2	3	1	HKD$296.30	https://images.asos-media.com/products/parallel-lines-leather-look-wrap-front-mini-skirt-with-bow-detail-in-tan/12726805-1-tan?$n_480w$&wid=476&fit=constrain	Gemini
140	LOOKBOOK DESIGN a-line tailored short with pleat front	1	3	1	HKD$190.99	https://images.asos-media.com/products/asos-design-a-line-tailored-short-with-pleat-front/14486139-1-teal?$XXL$&wid=513&fit=constrain	Leo
150	Fashionkilla going out midi skirt in rose	3	3	1	HKD$126.98	https://images.asos-media.com/products/fashionkilla-going-out-midi-skirt-in-rose/12997029-1-rose?$n_480w$&wid=476&fit=constrain	Gemini
149	Fashionkilla bodycon skirt with corset detail in black	3	3	1	HKD$190.48	https://images.asos-media.com/products/fashionkilla-bodycon-skirt-with-corset-detail-in-black/12323214-1-black?$n_480w$&wid=476&fit=constrain	Taurus
148	Missguided satin wrap midi skirt in green	3	3	1	HKD$232.80	https://images.asos-media.com/products/missguided-satin-wrap-midi-skirt-in-green/12925205-1-sagegreen?$n_480w$&wid=476&fit=constrain	Aries
147	PrettyLittleThing maxi skirt with high leg split in black	3	3	1	HKD$158.73	https://images.asos-media.com/products/prettylittlething-maxi-skirt-with-high-leg-split-in-black/12720224-1-black?$n_480w$&wid=476&fit=constrain	Pisces
146	Boohoo bardot jumpsuit with leg split in black	3	3	1	HKD$211.64	https://images.asos-media.com/products/boohoo-bardot-jumpsuit-with-leg-split-in-black/12837416-1-black?$n_480w$&wid=476&fit=constrain	Aquarius
145	Outrageous Fortune tie waist jumpsuit	3	3	1	HKD$359.79	https://images.asos-media.com/products/outrageous-fortune-tie-waist-jumpsuit/9913026-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
144	Missguided longline denim shorts in black	3	3	1	HKD$264.55	https://images.asos-media.com/products/missguided-longline-denim-shorts-in-black/11137565-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
143	Boohoo mini skirt with side split in black	3	3	1	HKD$126.98	https://images.asos-media.com/products/boohoo-mini-skirt-with-side-split-in-black/13073084-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
142	PrettyLittleThing high waist trouser with contrast zip in black pinstripe	3	3	1	HKD$190.48	https://images.asos-media.com/products/prettylittlething-high-waist-trouser-with-contrast-zip-in-black-pinstripe/12481543-1-black?$n_480w$&wid=476&fit=constrain	Libra
141	PrettyLittleThing basic midaxi skirt in black	3	3	1	HKD$105.82	https://images.asos-media.com/products/prettylittlething-basic-midaxi-skirt-in-black/9653469-1-black?$n_480w$&wid=476&fit=constrain	Virgo
130	Miss Selfridge skirt with tie side in black	2	3	1	HKD$232.80	https://images.asos-media.com/products/miss-selfridge-skirt-with-tie-side-in-black/11816416-1-black?$n_480w$&wid=476&fit=constrain	Libra
136	Pieces belted city shorts in beige	1	3	1	HKD$211.99	https://images.asos-media.com/products/pieces-belted-city-shorts-in-beige/14270514-1-beige?$XXL$&wid=513&fit=constrain	Aries
139	LOOKBOOK DESIGN PU runner short in black	1	3	1	HKD$237.04	https://images.asos-media.com/products/asos-design-pu-runner-short-in-black/14187305-1-black?$XXL$&wid=513&fit=constrain	Cancer
138	COLLUSION oversized joggers co-ord with seam detail in khaki	1	3	1	HKD$264.99	https://images.asos-media.com/products/collusion-oversized-joggers-co-ord-with-seam-detail-in-khaki/14767232-1-khaki?$XXL$&wid=513&fit=constrain	Gemini
159	Boohoo basic joggers in grey	0	3	1	HKD$126.98	https://images.asos-media.com/products/boohoo-basic-joggers-in-grey/13523434-1-grey?$n_480w$&wid=476&fit=constrain	Pisces
158	New Girl Order super mini flippy skirt in heritage check co-ord	0	3	1	HKD$296.30	https://images.asos-media.com/products/new-girl-order-super-mini-flippy-skirt-in-heritage-check-co-ord/13381884-1-heritagecheck?$n_480w$&wid=476&fit=constrain	Aquarius
171	LookBook Wide Fit Lace Up Plimsolls In White	0	1	0	HKD$169.31	https://images.asos-media.com/products/asos-wide-fit-lace-up-plimsolls-in-white/10838769-1-white?$n_480w$&wid=476&fit=constrain	Pisces
182	LookBook DESIGN oversized drop shoulder longline crinkle grandad collar shirt in pink	0	2	0	HKD$264.55	https://images.asos-media.com/products/asos-design-oversized-drop-shoulder-longline-crinkle-grandad-collar-shirt-in-pink/11991804-1-pink?$n_480w$&wid=476&fit=constrain	Libra
187	LookBook DESIGN regular fit flannel marl shirt in mustard	0	2	0	HKD$264.55	https://images.asos-media.com/products/asos-design-regular-fit-flannel-marl-shirt-in-mustard/11680211-1-mustard?$n_480w$&wid=476&fit=constrain	Aries
184	LookBook DESIGN regular fit viscose shirt in khaki	0	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-regular-fit-viscose-shirt-in-khaki/12450279-1-khaki?$n_480w$&wid=476&fit=constrain	Sagittarius
188	LookBook DESIGN skinny fit smart shirt with grandad collar & tipping detail in blue	0	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-skinny-fit-smart-shirt-with-grandad-collar-tipping-detail-in-blue/11955663-1-blue?$n_480w$&wid=476&fit=constrain	Taurus
181	LookBook DESIGN skinny shirt in black with short sleeves	0	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-skinny-shirt-in-black-with-short-sleeves/8250752-1-black?$n_480w$&wid=476&fit=constrain	Virgo
185	LookBook DESIGN skinny stripe shirt in white	0	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-skinny-stripe-shirt-in-white/12772348-1-white?$n_480w$&wid=476&fit=constrain	Capricorn
186	LookBook DESIGN slim check shirt in brown	0	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-slim-check-shirt-in-brown/12772159-1-brown?$n_480w$&wid=476&fit=constrain	Pisces
170	LookBook DESIGN Plus super skinny tuxedo suit jacket in burgundy	0	0	0	HKD$740.74	https://images.asos-media.com/products/asos-design-plus-super-skinny-tuxedo-suit-jacket-in-burgundy/11088353-1-burgundy?$n_480w$&wid=476&fit=constrain	Scorpio
162	LookBook DESIGN denim boilersuit in indigo	0	0	0	HKD$476.19	https://images.asos-media.com/products/asos-design-denim-boilersuit-in-indigo/11904754-1-indigo?$n_480w$&wid=476&fit=constrain	Aries
161	LookBook DESIGN skinny suit jacket in mid grey	0	0	0	HKD$634.92	https://images.asos-media.com/products/asos-design-skinny-suit-jacket-in-mid-grey/12224249-1-grey?$n_480w$&wid=476&fit=constrain	Pisces
166	LookBook DESIGN skinny suit jacket in navy	0	0	0	HKD$634.92	https://images.asos-media.com/products/asos-design-skinny-suit-jacket-in-navy/12223824-1-navy?$n_480w$&wid=476&fit=constrain	Cancer
169	LookBook DESIGN wedding skinny suit in yellow	0	0	0	HKD$846.56	https://images.asos-media.com/groups/asos-design-wedding-skinny-suit-in-yellow/24445-group-1?$n_480w$&wid=476&fit=constrain	Libra
163	LookBook DESIGN wedding skinny suit jacket in mink	0	0	0	HKD$634.92	https://images.asos-media.com/products/asos-design-wedding-skinny-suit-jacket-in-mink/11826471-1-mink?$n_480w$&wid=476&fit=constrain	Taurus
165	LookBook DESIGN wedding slim suit in light grey	0	0	0	HKD$846.56	https://images.asos-media.com/groups/asos-design-wedding-slim-suit-in-light-grey/24766-group-1?$n_480w$&wid=476&fit=constrain	Gemini
168	LookBook DESIGN wedding slim suit jacket in light grey	0	0	0	HKD$634.92	https://images.asos-media.com/products/asos-design-wedding-slim-suit-jacket-in-light-grey/11826264-1-grey?$n_480w$&wid=476&fit=constrain	Virgo
164	LookBook DESIGN wedding super skinny suit jacket in white	0	0	0	HKD$634.92	https://images.asos-media.com/products/asos-design-wedding-super-skinny-suit-jacket-in-white/11826470-1-white?$n_480w$&wid=476&fit=constrain	Aquarius
183	LookBook DESIGN festival regular fit shirt in neon snake print	0	0	0	HKD$190.48	https://images.asos-media.com/products/asos-design-festival-regular-fit-shirt-in-neon-snake-print/12247062-1-green?$n_480w$&wid=476&fit=constrain	Scorpio
172	LookBook DESIGN lace up plimsolls in white canvas	0	1	0	HKD$169.31	https://images.asos-media.com/products/asos-design-lace-up-plimsolls-in-white-canvas/7272565-1-white?$n_480w$&wid=476&fit=constrain	Sagittarius
173	LookBook DESIGN trainers in black canvas	0	1	0	HKD$126.98	https://images.asos-media.com/products/asos-design-trainers-in-black-canvas/10200943-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
175	Vans Authentic recycled plastic plimsolls in white	0	1	0	HKD$582.01	https://images.asos-media.com/products/vans-authentic-recycled-plastic-plimsolls-in-white/12233940-1-white?$n_480w$&wid=476&fit=constrain	Aries
176	LookBook DESIGN Wide Fit slip on plimsolls in black canvas	0	1	0	HKD$105.82	https://images.asos-media.com/products/asos-design-wide-fit-slip-on-plimsolls-in-black-canvas/9510590-1-black?$n_480w$&wid=476&fit=constrain	Taurus
177	LookBook DESIGN Wide Fit slip on trainers in grey canvas	0	1	0	HKD$148.15	https://images.asos-media.com/products/asos-design-wide-fit-slip-on-trainers-in-grey-canvas/9014969-1-grey?$n_480w$&wid=476&fit=constrain	Aquarius
178	LookBook DESIGN lace up plimsolls in white	0	1	0	HKD$158.73	https://images.asos-media.com/products/asos-design-lace-up-plimsolls-in-white/10120548-1-white?$n_480w$&wid=476&fit=constrain	Gemini
179	LookBook DESIGN lace up plimsolls in black	0	1	0	HKD$148.15	https://images.asos-media.com/products/asos-design-lace-up-plimsolls-in-black/10920858-1-black?$n_480w$&wid=476&fit=constrain	Cancer
180	Converse Renew Chuck Taylor All Star trainers in parchment	0	1	0	HKD$634.92	https://images.asos-media.com/products/converse-renew-chuck-taylor-all-star-trainers-in-parchment/12367891-1-beige?$n_480w$&wid=476&fit=constrain	Leo
174	LookBook DESIGN slip on trainers in white with tassel	0	1	0	HKD$190.48	https://images.asos-media.com/products/asos-design-slip-on-trainers-in-white-with-tassel/11923107-1-white?$n_480w$&wid=476&fit=constrain	Scorpio
201	LookBook DESIGN denim boilersuit in acid wash black	3	0	0	HKD$476.19	https://images.asos-media.com/products/asos-design-denim-boilersuit-in-acid-wash-black/12298249-1-blackacid?$n_480w$&wid=476&fit=constrain	Aquarius
202	LookBook DESIGN regular wrap kimono in paisley	3	0	0	HKD$370.37	https://images.asos-media.com/products/asos-design-regular-wrap-kimono-in-paisley/12414746-1-orange?$n_480w$&wid=476&fit=constrain	Gemini
203	LookBook DESIGN floral longline kimono	3	0	0	HKD$476.19	https://images.asos-media.com/products/asos-design-floral-longline-kimono/12315288-1-grey?$n_480w$&wid=476&fit=constrain	Cancer
204	boohooMAN tracksuit with man logo in neon yellow	3	0	0	HKD$370.37	https://images.asos-media.com/products/boohooman-tracksuit-with-man-logo-in-neon-yellow/12411538-1-neonyellow?$n_480w$&wid=476&fit=constrain	Leo
205	LookBook DESIGN kimono in floral print	3	0	0	HKD$423.28	https://images.asos-media.com/products/asos-design-kimono-in-floral-print/12780280-1-beige?$n_480w$&wid=476&fit=constrain	Virgo
206	LookBook DESIGN paisley kimono floral wrap in mustard	3	0	0	HKD$370.37	https://images.asos-media.com/products/asos-design-paisley-kimono-floral-wrap-in-mustard/12040162-1-yellow?$n_480w$&wid=476&fit=constrain	Libra
207	LookBook DESIGN regular fit animal spot shirt in black	3	0	0	HKD$423.28	https://images.asos-media.com/products/asos-design-regular-fit-animal-spot-shirt-in-black/12537820-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
208	LookBook DESIGN relaxed tiger print shirt with deep revere	3	0	0	HKD$232.80	https://images.asos-media.com/products/asos-design-relaxed-tiger-print-shirt-with-deep-revere/12932586-1-pink?$n_480w$&wid=476&fit=constrain	Sagittarius
209	LookBook DESIGN Plus kimono in giraffe print	3	0	0	HKD$476.19	https://images.asos-media.com/products/asos-design-plus-kimono-in-giraffe-print/12932743-1-brown?$n_480w$&wid=476&fit=constrain	Capricorn
210	LookBook DESIGN Plus paisley kimono floral wrap in mustard	3	0	0	HKD$370.37	https://images.asos-media.com/products/asos-design-plus-paisley-kimono-floral-wrap-in-mustard/12040151-1-yellow?$n_480w$&wid=476&fit=constrain	Pisces
229	LookBook DESIGN knitted half zip t-shirt in neon green	3	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-knitted-half-zip-t-shirt-in-neon-green/11526896-1-green?$n_480w$&wid=476&fit=constrain	Virgo
211	adidas Originals ozweego trainers in black with neon stripes	3	1	0	HKD$951.85	https://images.asos-media.com/products/adidas-originals-ozweego-trainers-in-black-with-neon-stripes/12027410-1-black?$n_480w$&wid=476&fit=constrain	Aries
212	Buffalo Classic chunky sole trainers in black	3	1	0	HKD$1,576.72	https://images.asos-media.com/products/buffalo-classic-chunky-sole-trainers-in-black/10482660-1-black?$n_480w$&wid=476&fit=constrain	Taurus
213	Buffalo Classic chunky sole trainers in flag print	3	1	0	HKD$2,222.22	https://images.asos-media.com/products/buffalo-classic-chunky-sole-trainers-in-flag-print/12731723-1-white?$n_480w$&wid=476&fit=constrain	Aquarius
214	Buffalo Classic chunky sole trainers in white	3	1	0	HKD$1,576.72	https://images.asos-media.com/products/buffalo-classic-chunky-sole-trainers-in-white/10482658-1-white?$n_480w$&wid=476&fit=constrain	Gemini
215	Buffalo Classic chunky sole trainers in hi shine black	3	1	0	HKD$1,587.30	https://images.asos-media.com/products/buffalo-classic-chunky-sole-trainers-in-hi-shine-black/12731731-1-black?$n_480w$&wid=476&fit=constrain	Cancer
216	Buffalo Classic hi top chunky sole trainers in black	3	1	0	HKD$1,756.61	https://images.asos-media.com/products/buffalo-classic-hi-top-chunky-sole-trainers-in-black/10482674-1-black?$n_480w$&wid=476&fit=constrain	Leo
217	Buffalo Classic hi top chunky sole trainers in white	3	1	0	HKD$1,756.61	https://images.asos-media.com/products/buffalo-classic-hi-top-chunky-sole-trainers-in-white/10482676-1-white?$n_480w$&wid=476&fit=constrain	Virgo
218	Buffalo Classic chunky sole trainers in wheat	3	1	0	HKD$1,576.72	https://images.asos-media.com/products/buffalo-classic-chunky-sole-trainers-in-wheat/10482668-1-tan?$n_480w$&wid=476&fit=constrain	Libra
189	LookBook DESIGN stretch slim denim shirt in grey with grandad collar	0	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-stretch-slim-denim-shirt-in-grey-with-grandad-collar/11414082-1-grey?$n_480w$&wid=476&fit=constrain	Aquarius
200	LookBook DESIGN 2 pack super skinny smart trousers in black and grey SAVE	0	3	0	HKD$359.79	https://images.asos-media.com/products/asos-design-2-pack-super-skinny-smart-trousers-in-black-and-grey-save/11464260-1-blackgrey?$n_480w$&wid=476&fit=constrain	Taurus
197	LookBook DESIGN balloon trousers in black	0	3	0	HKD$317.46	https://images.asos-media.com/products/asos-design-balloon-trousers-in-black/11423661-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
195	LookBook DESIGN heavyweight tapered crop smart trousers in olive green	0	3	0	HKD$264.55	https://images.asos-media.com/products/asos-design-heavyweight-tapered-crop-smart-trousers-in-olive-green/11638679-1-green?$n_480w$&wid=476&fit=constrain	Scorpio
194	LookBook DESIGN skinny smart trousers in black	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-skinny-smart-trousers-in-black/11512760-1-black?$n_480w$&wid=476&fit=constrain	Libra
196	LookBook DESIGN super skinny cropped smart trousers in black	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-super-skinny-cropped-smart-trousers-in-black/12284421-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
192	LookBook DESIGN super skinny smart trousers in black	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-super-skinny-smart-trousers-in-black/11464256-1-black?$n_480w$&wid=476&fit=constrain	Leo
198	LookBook DESIGN super skinny smart trousers in grey	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-super-skinny-smart-trousers-in-grey/11464254-1-grey?$n_480w$&wid=476&fit=constrain	Pisces
193	LookBook DESIGN super skinny smart trousers in navy	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-super-skinny-smart-trousers-in-navy/11464261-1-navy?$n_480w$&wid=476&fit=constrain	Virgo
191	LookBook DESIGN tapered cargo trousers in black with toggles	0	3	0	HKD$264.55	https://images.asos-media.com/products/asos-design-tapered-cargo-trousers-in-black-with-toggles/11426759-1-black?$n_480w$&wid=476&fit=constrain	Cancer
199	LookBook DESIGN tapered crop smart trousers in black	0	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-tapered-crop-smart-trousers-in-black/11512768-1-black?$n_480w$&wid=476&fit=constrain	Aries
219	LookBook DESIGN festival co-ord oversized cropped t-shirt with half sleeve in mesh in white	3	2	0	HKD$169.31	https://images.asos-media.com/products/asos-design-festival-co-ord-oversized-cropped-t-shirt-with-half-sleeve-in-mesh-in-white/11403449-1-white?$n_480w$&wid=476&fit=constrain	Scorpio
220	LookBook DESIGN co-ord oversized t-shirt in pink tie dye wash	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-co-ord-oversized-t-shirt-in-pink-tie-dye-wash/11865797-1-pink?$n_480w$&wid=476&fit=constrain	Sagittarius
221	LookBook DESIGN longline long sleeve t-shirt in gold metallic mesh	3	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-longline-long-sleeve-t-shirt-in-gold-metallic-mesh/12823156-1-gold?$n_480w$&wid=476&fit=constrain	Capricorn
222	LookBook DESIGN oversized long sleeve t-shirt with gold roman numeral print in mesh	3	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-oversized-long-sleeve-t-shirt-with-gold-roman-numeral-print-in-mesh/12911949-1-black?$n_480w$&wid=476&fit=constrain	Pisces
223	LookBook DESIGN oversized super longline t-shirt with half sleeve in blue velour	3	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-oversized-super-longline-t-shirt-with-half-sleeve-in-blue-velour/12560856-1-mykonos?$n_480w$&wid=476&fit=constrain	Aries
224	LookBook DESIGN oversized longline t-shirt with notch neck in linen mix	3	2	0	HKD$169.31	https://images.asos-media.com/products/asos-design-oversized-longline-t-shirt-with-notch-neck-in-linen-mix/11574414-1-ecru?$n_480w$&wid=476&fit=constrain	Taurus
225	LookBook DESIGN t-shirt in fine mesh in brown	3	2	0	HKD$148.15	https://images.asos-media.com/products/asos-design-t-shirt-in-fine-mesh-in-brown/12802033-1-daschund?$n_480w$&wid=476&fit=constrain	Aquarius
226	LookBook DESIGN relaxed t-shirt in sparkly mesh	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-relaxed-t-shirt-in-sparkly-mesh/11486213-1-black?$n_480w$&wid=476&fit=constrain	Gemini
227	LookBook DESIGN oversized t-shirt with half sleeve and extreme side splits in fine mesh	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-half-sleeve-and-extreme-side-splits-in-fine-mesh/12801488-1-black?$n_480w$&wid=476&fit=constrain	Cancer
228	LookBook DESIGN organic cotton relaxed t-shirt with tie dye wash roll sleeve and mantra back print	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-organic-cotton-relaxed-t-shirt-with-tie-dye-wash-roll-sleeve-and-mantra-back-print/11573685-1-peach?$n_480w$&wid=476&fit=constrain	Leo
230	LookBook DESIGN Plus Festival relaxed t-shirt in sheer sparkly mesh	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-plus-festival-relaxed-t-shirt-in-sheer-sparkly-mesh/11596245-1-black?$n_480w$&wid=476&fit=constrain	Libra
231	LookBook DESIGN oversized super longline t-shirt with half sleeve in brown velour	3	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-oversized-super-longline-t-shirt-with-half-sleeve-in-brown-velour/12560861-1-glazedginger?$n_480w$&wid=476&fit=constrain	Scorpio
232	LookBook DESIGN Plus knitted tie dye t-shirt in blue	3	2	0	HKD$264.55	https://images.asos-media.com/products/asos-design-plus-knitted-tie-dye-t-shirt-in-blue/12196399-1-blue?$n_480w$&wid=476&fit=constrain	Sagittarius
233	LookBook DESIGN oversized t-shirt with roll sleeve with multicolour vertical tie dye wash	3	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-roll-sleeve-with-multicolour-vertical-tie-dye-wash/11403443-1-multi?$n_480w$&wid=476&fit=constrain	Capricorn
234	LookBook DESIGN Festival co-ord oversized t-shirt in transparent fabric in green	3	2	0	HKD$264.55	https://images.asos-media.com/products/asos-design-festival-co-ord-oversized-t-shirt-in-transparent-fabric-in-green/11574408-1-green?$n_480w$&wid=476&fit=constrain	Pisces
235	COLLUSION oversized skull print co-ord	3	3	0	HKD$349.21	https://images.asos-media.com/groups/collusion-oversized-skull-print-co-ord/24725-group-1?$n_480w$&wid=476&fit=constrain	Aries
236	COLLUSION Tall oversized skull print co-ord	3	3	0	HKD$349.21	https://images.asos-media.com/groups/collusion-tall-oversized-skull-print-co-ord/24726-group-1?$n_480w$&wid=476&fit=constrain	Taurus
238	LookBook DESIGN skinny jeans in coloured zebra print	3	3	0	HKD$370.37	https://images.asos-media.com/products/asos-design-skinny-jeans-in-coloured-zebra-print/12054223-1-red?$n_480w$&wid=476&fit=constrain	Gemini
239	LookBook DESIGN skinny jeans in tie dye	3	3	0	HKD$423.28	https://images.asos-media.com/products/asos-design-skinny-jeans-in-tie-dye/11522212-1-orange?$n_480w$&wid=476&fit=constrain	Leo
240	LookBook DESIGN Plus super skinny jeans in acid wash pink	3	3	0	HKD$370.37	https://images.asos-media.com/products/asos-design-plus-super-skinny-jeans-in-acid-wash-pink/11623036-1-pink?$n_480w$&wid=476&fit=constrain	Cancer
242	Crooked Tongues Rave all over paint splatter neon swim shorts	3	3	0	HKD$264.55	https://images.asos-media.com/products/crooked-tongues-rave-all-over-paint-splatter-neon-swim-shorts/12668667-1-black?$n_480w$&wid=476&fit=constrain	Libra
243	LookBook DESIGN short meggings in black mesh	3	3	0	HKD$190.48	https://images.asos-media.com/products/asos-design-short-meggings-in-black-mesh/12784502-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
244	COLLUSION oversized skull print short festival co-ord	3	3	0	HKD$158.73	https://images.asos-media.com/products/collusion-oversized-skull-print-short-festival-co-ord/11866781-1-stone?$n_480w$&wid=476&fit=constrain	Sagittarius
278	LookBook DESIGN jersey skinny shorts with ringer details in pink	1	3	0	HKD$169.31	https://images.asos-media.com/products/asos-design-jersey-skinny-shorts-with-ringer-details-in-pink/12232296-1-strawberrycream?$n_480w$&wid=476&fit=constrain	Libra
237	LookBook DESIGN super skinny jeans in tie dye	3	3	0	HKD$423.28	https://images.asos-media.com/products/asos-design-super-skinny-jeans-in-tie-dye/11522208-1-pink?$n_480w$&wid=476&fit=constrain	Pisces
245	AllSaints vest in black	1	2	0	HKD$211.64	https://images.asos-media.com/products/allsaints-vest-in-black/11552659-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
246	LookBook DESIGN oversized longline sleeveless t-shirt in blue	1	2	0	HKD$105.82	https://images.asos-media.com/products/asos-design-oversized-longline-sleeveless-t-shirt-in-blue/12812755-1-oilblue?$n_480w$&wid=476&fit=constrain	Pisces
255	LookBook DESIGN espadrilles in black canvas	1	1	0	HKD$126.98	https://images.asos-media.com/products/asos-design-espadrilles-in-black-canvas/9484478-1-black?$n_480w$&wid=476&fit=constrain	Scorpio
256	LookBook DESIGN Wide Fit Loafers In Woven Tan Leather With Tassel Detail	1	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-wide-fit-loafers-in-woven-tan-leather-with-tassel-detail/9393288-1-tan?$n_480w$&wid=476&fit=constrain	Sagittarius
257	LookBook DESIGN Loafers In Woven Tan Leather With Tassel Detail	1	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-loafers-in-woven-tan-leather-with-tassel-detail/9393295-1-tan?$n_480w$&wid=476&fit=constrain	Capricorn
258	LookBook DESIGN espadrilles in black snake emboss	1	1	0	HKD$148.15	https://images.asos-media.com/products/asos-design-espadrilles-in-black-snake-emboss/11949733-1-black?$n_480w$&wid=476&fit=constrain	Pisces
259	LookBook DESIGN Wide Fit lace up espadrilles in white textured canvas	1	1	0	HKD$126.98	https://images.asos-media.com/products/asos-design-wide-fit-lace-up-espadrilles-in-white-textured-canvas/9000553-1-white?$n_480w$&wid=476&fit=constrain	Aries
260	Burton Menswear boat shoe in Navy	1	1	0	HKD$370.37	https://images.asos-media.com/products/burton-menswear-boat-shoe-in-navy/13062825-1-navy?$n_480w$&wid=476&fit=constrain	Taurus
261	LookBook DESIGN Wide Fit boat shoes in tan leather with gum sole	1	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-wide-fit-boat-shoes-in-tan-leather-with-gum-sole/9397535-1-tan?$n_480w$&wid=476&fit=constrain	Aquarius
262	LookBook DESIGN espadrilles in black and white pattern	1	1	0	HKD$126.98	https://images.asos-media.com/products/asos-design-espadrilles-in-black-and-white-pattern/11051710-1-black?$n_480w$&wid=476&fit=constrain	Gemini
263	LookBook DESIGN espadrilles in striped canvas	1	1	0	HKD$126.98	https://images.asos-media.com/products/asos-design-espadrilles-in-striped-canvas/9484946-1-navy?$n_480w$&wid=476&fit=constrain	Cancer
264	Selected Homme suede spanish espadrilles in navy	1	1	0	HKD$529.10	https://images.asos-media.com/products/selected-homme-suede-spanish-espadrilles-in-navy/11493685-1-darknavy?$n_480w$&wid=476&fit=constrain	Leo
275	boohooMAN drawstring denim shorts in acid wash	1	3	0	HKD$232.80	https://images.asos-media.com/products/boohooman-drawstring-denim-shorts-in-acid-wash/11794563-1-indigo?$n_480w$&wid=476&fit=constrain	Cancer
276	LookBook DESIGN Tall slim chino shorts in black	1	3	0	HKD$190.48	https://images.asos-media.com/products/asos-design-tall-slim-chino-shorts-in-black/11177886-1-black?$n_480w$&wid=476&fit=constrain	Leo
277	LookBook DESIGN Plus slim chino shorts in black	1	3	0	HKD$190.48	https://images.asos-media.com/products/asos-design-plus-slim-chino-shorts-in-black/11351424-1-black?$n_480w$&wid=476&fit=constrain	Virgo
251	boohooMAN savage print longline vest in black	1	2	0	HKD$105.82	https://images.asos-media.com/products/boohooman-savage-print-longline-vest-in-black/12890334-1-black?$n_480w$&wid=476&fit=constrain	Leo
253	LookBook DESIGN organic muscle fit vest in coral	1	2	0	HKD$52.91	https://images.asos-media.com/products/asos-design-organic-muscle-fit-vest-in-coral/11436456-1-coral?$n_480w$&wid=476&fit=constrain	Virgo
247	LookBook DESIGN pique oversized longline sleeveless t-shirt with dropped armhole in black	1	2	0	HKD$126.98	https://images.asos-media.com/products/asos-design-pique-oversized-longline-sleeveless-t-shirt-with-dropped-armhole-in-black/12022384-1-black?$n_480w$&wid=476&fit=constrain	Aries
248	LookBook DESIGN tank vest in rib with turtle zip neck in white	1	2	0	HKD$148.15	https://images.asos-media.com/products/asos-design-tank-vest-in-rib-with-turtle-zip-neck-in-white/12148915-1-white?$n_480w$&wid=476&fit=constrain	Taurus
254	Nike Club logo vest in grey	1	2	0	HKD$169.31	https://images.asos-media.com/products/nike-club-logo-vest-in-grey/11125402-1-grey?$n_480w$&wid=476&fit=constrain	Libra
265	COLLUSION Unisex tie dye printed shirt	1	0	0	HKD$264.55	https://images.asos-media.com/products/collusion-unisex-tie-dye-printed-shirt/12500577-1-multi?$n_480w$&wid=476&fit=constrain	Virgo
270	LookBook DESIGN co-ord oversized shirt in washed wrestler print	1	0	0	HKD$296.30	https://images.asos-media.com/products/asos-design-co-ord-oversized-shirt-in-washed-wrestler-print/12292604-1-white?$n_480w$&wid=476&fit=constrain	Pisces
271	LookBook DESIGN co-ord regular fit floral shirt in black with hand drawn floral print	1	0	0	HKD$190.48	https://images.asos-media.com/products/asos-design-co-ord-regular-fit-floral-shirt-in-black-with-hand-drawn-floral-print/12294245-1-black?$n_480w$&wid=476&fit=constrain	Aries
268	LookBook DESIGN regular fit shirt with scribble face print in white	1	0	0	HKD$211.64	https://images.asos-media.com/products/asos-design-regular-fit-shirt-with-scribble-face-print-in-white/12621502-1-white?$n_480w$&wid=476&fit=constrain	Sagittarius
269	LookBook DESIGN regular map print shirt	1	0	0	HKD$296.30	https://images.asos-media.com/products/asos-design-regular-map-print-shirt/12387491-1-white?$n_480w$&wid=476&fit=constrain	Capricorn
272	LookBook DESIGN relaxed fit stripe shirt in white	1	0	0	HKD$264.55	https://images.asos-media.com/products/asos-design-relaxed-fit-stripe-shirt-in-white/12549875-1-white?$n_480w$&wid=476&fit=constrain	Taurus
267	LookBook DESIGN relaxed multi stripe shirt	1	0	0	HKD$264.55	https://images.asos-media.com/products/asos-design-relaxed-multi-stripe-shirt/12016165-1-multi?$n_480w$&wid=476&fit=constrain	Scorpio
273	LookBook DESIGN relaxed shirt with parrot print	1	0	0	HKD$264.55	https://images.asos-media.com/products/asos-design-relaxed-shirt-with-parrot-print/11988281-1-blue?$n_480w$&wid=476&fit=constrain	Aquarius
274	LookBook DESIGN short sleeve shirt in white chevron stripe	1	0	0	HKD$264.55	https://images.asos-media.com/products/asos-design-short-sleeve-shirt-in-white-chevron-stripe/12536040-1-white?$n_480w$&wid=476&fit=constrain	Gemini
266	boohooMAN revere collar shirt with leopard print	1	0	0	HKD$232.80	https://images.asos-media.com/products/boohooman-revere-collar-shirt-with-leopard-print/11794568-1-black?$n_480w$&wid=476&fit=constrain	Libra
252	LookBook DESIGN boxy cropped tank vest in orange	1	2	0	HKD$105.82	https://images.asos-media.com/products/asos-design-boxy-cropped-tank-vest-in-orange/12759628-1-amberglow?$n_480w$&wid=476&fit=constrain	Sagittarius
279	LookBook DESIGN jersey yellow shorts in shorter length	1	3	0	HKD$126.98	https://images.asos-media.com/products/asos-design-jersey-yellow-shorts-in-shorter-length/11375312-1-beeswax?$n_480w$&wid=476&fit=constrain	Scorpio
280	Nike jersey shorts in black 804419-010	1	3	0	HKD$232.80	https://images.asos-media.com/products/nike-jersey-shorts-in-black-804419-010/6429896-1-black?$n_480w$&wid=476&fit=constrain	Sagittarius
281	LookBook DESIGN jersey skinny shorts in grey marl	1	3	0	HKD$126.98	https://images.asos-media.com/products/asos-design-jersey-skinny-shorts-in-grey-marl/11667517-1-greymarl?$n_480w$&wid=476&fit=constrain	Pisces
282	LookBook DESIGN co-ord jersey shorts with mesh overlay in white	1	3	0	HKD$190.48	https://images.asos-media.com/products/asos-design-co-ord-jersey-shorts-with-mesh-overlay-in-white/11356367-1-white?$n_480w$&wid=476&fit=constrain	Aries
283	LookBook DESIGN co-ord slim shorter shorts in orange with border print	1	3	0	HKD$264.55	https://images.asos-media.com/products/asos-design-co-ord-slim-shorter-shorts-in-orange-with-border-print/11505926-1-orange?$n_480w$&wid=476&fit=constrain	Taurus
284	COLLUSION denim shorts with collusion taping	1	3	0	HKD$211.64	https://images.asos-media.com/products/collusion-denim-shorts-with-collusion-taping/12183228-1-blue?$n_480w$&wid=476&fit=constrain	Gemini
308	LookBook DESIGN slim fit grandad collar shirt in grey stripe	2	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-slim-fit-grandad-collar-shirt-in-grey-stripe/12373851-1-grey?$n_480w$&wid=476&fit=constrain	Taurus
305	LookBook DESIGN slim fit polka dot grandad shirt in white	2	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-slim-fit-polka-dot-grandad-shirt-in-white/12742921-1-white?$n_480w$&wid=476&fit=constrain	Capricorn
309	LookBook DESIGN smart stretch slim fit oxford shirt with double cuff	2	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-smart-stretch-slim-fit-oxford-shirt-with-double-cuff/11234796-1-white?$n_480w$&wid=476&fit=constrain	Aquarius
307	Only & Sons short sleeve oxford shirt in light blue	2	2	0	HKD$211.64	https://images.asos-media.com/products/only-sons-short-sleeve-oxford-shirt-in-light-blue/11943509-1-cashmereblue?$n_480w$&wid=476&fit=constrain	Aries
292	Burton Menswear skinny suit jacket in black	2	0	0	HKD$582.01	https://images.asos-media.com/products/burton-menswear-skinny-suit-jacket-in-black/11459353-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
291	Jack & Jones Premium Suit In Slim Fit Black	2	0	0	HKD$1,534.39	https://images.asos-media.com/groups/jack-jones-premium-suit-in-slim-fit-black/19480-group-1?$n_480w$&wid=476&fit=constrain	Sagittarius
290	Moss London suit in blue check	2	0	0	HKD$1,047.62	https://images.asos-media.com/groups/moss-london-suit-in-blue-check/25225-group-1?$n_480w$&wid=476&fit=constrain	Scorpio
293	Moss London suit jacket in copper	2	0	0	HKD$941.80	https://images.asos-media.com/products/moss-london-suit-jacket-in-copper/13125431-1-copper?$n_480w$&wid=476&fit=constrain	Pisces
286	New Look skinny suit jacket in navy	2	0	0	HKD$528.99	https://images.asos-media.com/products/new-look-skinny-suit-jacket-in-navy/10744899-1-navy?$n_480w$&wid=476&fit=constrain	Cancer
289	Selected Homme slim fit stretch suit jacket in navy	2	0	0	HKD$952.38	https://images.asos-media.com/products/selected-homme-slim-fit-stretch-suit-jacket-in-navy/10438687-1-navyblazer?$n_480w$&wid=476&fit=constrain	Libra
288	Selected Homme slim suit with patch pockets in blue	2	0	0	HKD$1,904.76	https://images.asos-media.com/groups/selected-homme-slim-suit-with-patch-pockets-in-blue/24167-group-1?$n_480w$&wid=476&fit=constrain	Virgo
287	Twisted Tailor super skinny double breasted suit in check	2	0	0	HKD$2,222.22	https://images.asos-media.com/groups/twisted-tailor-super-skinny-double-breasted-suit-in-check/25342-group-1?$n_480w$&wid=476&fit=constrain	Leo
294	Twisted Tailor super skinny double breasted suit jacket in check	2	0	0	HKD$1,534.39	https://images.asos-media.com/products/twisted-tailor-super-skinny-double-breasted-suit-jacket-in-check/12237218-1-navy?$n_480w$&wid=476&fit=constrain	Aries
295	LookBook DESIGN brogue loafers in black leather	2	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-brogue-loafers-in-black-leather/11522854-1-black?$n_480w$&wid=476&fit=constrain	Taurus
296	House Of Hounds Bardin slip on tassel loafers in black	2	1	0	HKD$624.34	https://images.asos-media.com/products/house-of-hounds-bardin-slip-on-tassel-loafers-in-black/12832470-1-black?$n_480w$&wid=476&fit=constrain	Aquarius
297	LookBook DESIGN monk shoes in faux tan leather	2	1	0	HKD$264.55	https://images.asos-media.com/products/asos-design-monk-shoes-in-faux-tan-leather/12019357-1-tan?$n_480w$&wid=476&fit=constrain	Gemini
298	Ted Baker Peair derby shoes in black leather	2	1	0	HKD$1,058.20	https://images.asos-media.com/products/ted-baker-peair-derby-shoes-in-black-leather/8969852-1-black?$n_480w$&wid=476&fit=constrain	Cancer
299	LookBook DESIGN Wide Fit tassel loafers in tan leather with natural sole	2	1	0	HKD$370.37	https://images.asos-media.com/products/asos-design-wide-fit-tassel-loafers-in-tan-leather-with-natural-sole/9104845-1-tan?$n_480w$&wid=476&fit=constrain	Leo
300	Ted Baker Ollivur brogue shoes in black leather	2	1	0	HKD$1,058.20	https://images.asos-media.com/products/ted-baker-ollivur-brogue-shoes-in-black-leather/9259490-1-black?$n_480w$&wid=476&fit=constrain	Virgo
301	LookBook DESIGN Wide Fit oxford brogue shoes in tan leather	2	1	0	HKD$370.37	https://images.asos-media.com/products/asos-design-wide-fit-oxford-brogue-shoes-in-tan-leather/10284882-1-tan?$n_480w$&wid=476&fit=constrain	Libra
302	LookBook DESIGN Wide Fit monk shoes in brown leather	2	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-wide-fit-monk-shoes-in-brown-leather/10572486-1-brown?$n_480w$&wid=476&fit=constrain	Pisces
303	LookBook DESIGN Wide Fit tassel loafers in navy suede with natural sole	2	1	0	HKD$370.37	https://images.asos-media.com/products/asos-design-wide-fit-tassel-loafers-in-navy-suede-with-natural-sole/9219583-1-navy?$n_480w$&wid=476&fit=constrain	Scorpio
304	Ted Baker Murain oxford shoes in tan leather	2	1	0	HKD$1,058.20	https://images.asos-media.com/products/ted-baker-murain-oxford-shoes-in-tan-leather/10278236-1-tan?$n_480w$&wid=476&fit=constrain	Sagittarius
241	Crooked Tongues Rave unigender_id short in spliced neon	3	3	0	HKD$264.55	https://images.asos-media.com/products/crooked-tongues-rave-unisex-short-in-spliced-neon/12668659-4?$XXL$&wid=513&fit=constrain	Virgo
55	adidas Originals adicolor long sleeve satin button up shirt in red	1	2	1	HKD$369.99	https://images.asos-media.com/products/adidas-originals-adicolor-long-sleeve-satin-button-up-shirt-in-red/14124130-1-red?$XXL$&wid=513&fit=constrain	Virgo
326	In The Style x Saffron Barker dotty tulle mesh bodycon dress in black	0	0	1	HKD$402.99	https://images.asos-media.com/products/in-the-style-x-saffron-barker-dotty-tulle-mesh-bodycon-dress-in-black/20076179-1-black?$XXL$&wid=513&fit=constrain	Virgo
101	In The Style x Shaughna motif t shirt in black	1	2	1	HKD$158.99	https://images.asos-media.com/products/in-the-style-x-shaughna-motif-t-shirt-in-black/21033902-1-black?$XXL$&wid=513&fit=constrain	Taurus
104	Boohoo oversized shirt in olive	1	2	1	HKD$190.55	https://images.asos-media.com/products/boohoo-oversized-shirt-in-olive/20169263-1-green?$XXL$&wid=513&fit=constrain	Leo
32	Stradivarius zip side heeled boot in snake	0	1	1	HKD$275.03	https://images.asos-media.com/products/stradivarius-zip-side-heeled-boot-in-snake/13165917-1-brown?$n_480w$&wid=476&fit=constrain	Scorpio
31	PrettyLittleThing block heeled lace up sandals with pointed toe and clear strap in nude	0	1	1	HKD$296.30	https://images.asos-media.com/products/prettylittlething-block-heeled-lace-up-sandals-with-pointed-toe-and-clear-strap-in-nude/13033751-1-beige?$n_480w$&wid=476&fit=constrain	Libra
311	LookBook DESIGN skinny fit check shirt in blue	2	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-skinny-fit-check-shirt-in-blue/12094728-1-blue?$n_480w$&wid=476&fit=constrain	Cancer
80	Stradivarius ribbed jersey top with embellished sleeve detail in grey	0	2	1	HKD$137.46	https://images.asos-media.com/products/stradivarius-ribbed-jersey-top-with-embellished-sleeve-detail-in-grey/13519629-1-darkgrey?$n_480w$&wid=476&fit=constrain	Leo
160	Pull&Bear basic high rise skinny jeans in light blue	0	3	1	HKD$211.53	https://images.asos-media.com/products/pullbear-basic-high-rise-skinny-jeans-in-light-blue/13162622-1-lightblue?$n_480w$&wid=476&fit=constrain	Aries
156	Missguided riot mom jeans in stonewash	0	3	1	HKD$296.30	https://images.asos-media.com/products/missguided-riot-mom-jeans-in-stonewash/13114004-1-blue?$n_480w$&wid=476&fit=constrain	Sagittarius
327	French Connection high neck mini skater dress	2	0	1	HKD$763.28	https://images.asos-media.com/products/french-connection-high-neck-mini-skater-dress/13925768-1-margotred?$XXL$&wid=513&fit=constrain	Pisces
328	Vero Moda shift dress with tie sleeves in sand	2	0	1	HKD$428.99	https://images.asos-media.com/products/vero-moda-shift-dress-with-tie-sleeves-in-sand/14662078-1-beige?$XXL$&wid=513&fit=constrain	Aries
329	Missguided tweed shift dress	2	0	1	HKD$253.97	https://images.asos-media.com/products/missguided-tweed-shift-dress/14291871-1-black?$XXL$&wid=513&fit=constrain	Taurus
314	LookBook DESIGN skinny fit shirt blue pow check shirt with contrast rib collar	2	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-skinny-fit-shirt-blue-pow-check-shirt-with-contrast-rib-collar/12094732-1-blue?$n_480w$&wid=476&fit=constrain	Libra
312	LookBook DESIGN slim fit smart shirt with ditsy geo print in navy	2	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-slim-fit-smart-shirt-with-ditsy-geo-print-in-navy/12056276-1-navy?$n_480w$&wid=476&fit=constrain	Leo
310	LookBook DESIGN smart skinny work stripe shirt in blue	2	2	0	HKD$211.64	https://images.asos-media.com/products/asos-design-smart-skinny-work-stripe-shirt-in-blue/12007386-1-blue?$n_480w$&wid=476&fit=constrain	Gemini
313	New Look poplin shirt in regular fit in black	2	2	0	HKD$137.46	https://images.asos-media.com/products/new-look-poplin-shirt-in-regular-fit-in-black/11451574-1-black?$n_480w$&wid=476&fit=constrain	Virgo
315	Heart & Dagger skinny fit suit	2	3	0	HKD$1,322.75	https://images.asos-media.com/groups/heart-dagger-skinny-fit-suit/22334-group-1?$n_480w$&wid=476&fit=constrain	Scorpio
316	LookBook DESIGN skinny smart jogger in stone crepe	2	3	0	HKD$317.46	https://images.asos-media.com/products/asos-design-skinny-smart-jogger-in-stone-crepe/12515374-1-stone?$n_480w$&wid=476&fit=constrain	Sagittarius
324	LookBook DESIGN skinny suit trousers in navy	2	3	0	HKD$211.64	https://images.asos-media.com/products/asos-design-skinny-suit-trousers-in-navy/8324674-1-navy?$n_480w$&wid=476&fit=constrain	Leo
323	Moss London suit in blue check	2	3	0	HKD$1,047.62	https://images.asos-media.com/groups/moss-london-suit-in-blue-check/25225-group-1?$n_480w$&wid=476&fit=constrain	Cancer
325	Moss London suit trouser in blue check	2	3	0	HKD$423.28	https://images.asos-media.com/products/moss-london-suit-trouser-in-blue-check/13125429-1-navy?$n_480w$&wid=476&fit=constrain	Virgo
322	New Look skinny suit trousers in black	2	3	0	HKD$190.37	https://images.asos-media.com/products/new-look-skinny-suit-trousers-in-black/10294074-1-black?$n_480w$&wid=476&fit=constrain	Gemini
318	Selected Homme slim fit stretch suit trousers in light grey	2	3	0	HKD$529.10	https://images.asos-media.com/products/selected-homme-slim-fit-stretch-suit-trousers-in-light-grey/11303136-1-lightgreymelange?$n_480w$&wid=476&fit=constrain	Pisces
321	Selected Homme slim suit with patch pockets in blue	2	3	0	HKD$1,904.76	https://images.asos-media.com/groups/selected-homme-slim-suit-with-patch-pockets-in-blue/24167-group-1?$n_480w$&wid=476&fit=constrain	Aquarius
319	Selected Homme suit trousers in green	2	3	0	HKD$529.10	https://images.asos-media.com/products/selected-homme-suit-trousers-in-green/12512298-1-darkestspruce?$n_480w$&wid=476&fit=constrain	Aries
320	Twisted Tailor super skinny double breasted suit in check	2	3	0	HKD$2,222.22	https://images.asos-media.com/groups/twisted-tailor-super-skinny-double-breasted-suit-in-check/25342-group-1?$n_480w$&wid=476&fit=constrain	Taurus
317	Twisted Tailor super skinny double breasted suit trousers in check	2	3	0	HKD$687.83	https://images.asos-media.com/products/twisted-tailor-super-skinny-double-breasted-suit-trousers-in-check/12237217-1-navy?$n_480w$&wid=476&fit=constrain	Capricorn
330	Warehouse frill hem crepe belted dress in camel	2	0	1	HKD$389.42	https://images.asos-media.com/products/warehouse-frill-hem-crepe-belted-dress-in-camel/14631822-1-camel?$XXL$&wid=513&fit=constrain	Gemini
331	ASOS DESIGN stripe shirt dress in black and tan stripe	2	0	1	HKD$370.99	https://images.asos-media.com/products/asos-design-stripe-shirt-dress-in-black-and-tan-stripe/13664607-1-blacktanstripe?$XXL$&wid=513&fit=constrain	Cancer
332	Y.A.S maxi dress in black abstract spot print	2	0	1	HKD$275.13	https://images.asos-media.com/products/yas-maxi-dress-in-black-abstract-spot-print/13817936-1-multi?$XXL$&wid=513&fit=constrain	Leo
333	ASOS DESIGN tux mini dress with natural buckle belt	2	0	1	HKD$174.06	https://images.asos-media.com/products/asos-design-tux-mini-dress-with-natural-buckle-belt/10959274-1-rust?$XXL$&wid=513&fit=constrain	Virgo
334	River Island wrap mini tux dress in black	2	0	1	HKD$338.99	https://images.asos-media.com/products/river-island-wrap-mini-tux-dress-in-black/13857840-1-black?$XXL$&wid=513&fit=constrain	Libra
335	Vero Moda Curve shift dress with tie sleeves in black	2	0	1	HKD$380.95	https://images.asos-media.com/products/vero-moda-curve-shift-dress-with-tie-sleeves-in-black/14816119-1-black?$XXL$&wid=513&fit=constrain	Scorpio
336	Warehouse check tweed dress in black	2	0	1	HKD$414.81	https://images.asos-media.com/products/warehouse-check-tweed-dress-in-black/14069529-1-blackcream?$XXL$&wid=513&fit=constrain	Sagittarius
337	Monki midi belted shirt dress with pockets in rust	2	0	1	HKD$296.30	https://images.asos-media.com/products/monki-midi-belted-shirt-dress-with-pockets-in-rust/13382968-1-rust?$XXL$&wid=513&fit=constrain	Capricorn
338	New Look leather look belted mini dress in cream	2	0	1	HKD$150.69	https://images.asos-media.com/products/new-look-leather-look-belted-mini-dress-in-cream/14493047-1-cream13?$XXL$&wid=513&fit=constrain	Aquarius
340	For Love and Lemons Azalea strapless mini dress in black	3	0	1	HKD$2486.99	https://images.asos-media.com/products/for-love-and-lemons-azalea-strapless-mini-dress-in-black/20115653-1-black?$XXL$&wid=513&fit=constrain	Aries
341	Boohoo one shoulder puff sleeve dress in blue	3	0	1	HKD$105.82	https://images.asos-media.com/products/boohoo-one-shoulder-puff-sleeve-dress-in-blue/20160931-1-blue?$XXL$&wid=513&fit=constrain	Taurus
342	In The Style x Lorna Luxe extreme puff sleeve babydoll dress in white	3	0	1	HKD$423.99	https://images.asos-media.com/products/in-the-style-x-lorna-luxe-extreme-puff-sleeve-babydoll-dress-in-white/20791530-1-white?$XXL$&wid=513&fit=constrain	Gemini
343	Saint Genies ruched floral print mini dress in multi	3	0	1	HKD$402.99	https://images.asos-media.com/products/saint-genies-ruched-floral-print-mini-dress-in-multi/20331241-1-multi?$XXL$&wid=513&fit=constrain	Cancer
345	C/Meo Collective on the level mini dress with statement sleeve	3	0	1	HKD$804.23	https://images.asos-media.com/products/c-meo-collective-on-the-level-mini-dress-with-statement-sleeve/13492050-1-cherry?$XXL$&wid=513&fit=constrain	Virgo
346	Vero Moda textured mini dress with puff sleeves in black	3	0	1	HKD$697.99	https://images.asos-media.com/products/vero-moda-textured-mini-dress-with-puff-sleeves-in-black/20025042-1-black?$XXL$&wid=513&fit=constrain	Libra
347	True Violet exclusive bandeau frill midi dress in orange	3	0	1	HKD$275.13	https://images.asos-media.com/products/true-violet-exclusive-bandeau-frill-midi-dress-in-orange/20042978-1-orange?$XXL$&wid=513&fit=constrain	Scorpio
348	PrettyLittleThing belted blazer dress with wrap front in black	3	0	1	HKD$185.19	https://images.asos-media.com/products/prettylittlething-belted-blazer-dress-with-wrap-front-in-black/14448303-1-black?$XXL$&wid=513&fit=constrain	Sagittarius
350	Vesper bandeau midi dress in cobalt	3	0	1	HKD$245.50	https://images.asos-media.com/products/vesper-bandeau-midi-dress-in-cobalt/13664636-1-cobalt?$XXL$&wid=513&fit=constrain	Aquarius
339	Aria Cove long sleeve ruched tie front mini dress in green	2	0	1	HKD$370.99	https://images.asos-media.com/products/new-look-leather-look-belted-mini-dress-in-cream/14493047-1-cream13?$XXL$&wid=513&fit=constrain	Pisces
351	PrettyLittleThing peplum satin cami top with lace trim in navy	0	2	1	HKD$190.48	https://images.asos-media.com/products/prettylittlething-peplum-satin-cami-top-with-lace-trim-in-navy/13036685-1-navy?$n_480w$&wid=476&fit=constrain	Aquarius
352	Stradivarius ruched sleeved blazer in black	0	2	1	HKD$317.35	https://images.asos-media.com/products/stradivarius-ruched-sleeved-blazer-in-black/11721647-1-black?$n_480w$&wid=476&fit=constrain	Capricorn
353	Weekday midi A-line skirt in beige	0	3	1	HKD$423.28	https://images.asos-media.com/products/weekday-midi-a-line-skirt-in-beige/12092136-1-khaki?$n_480w$&wid=476&fit=constrain	Sagittarius
354	Boohoo chiffon midaxi skirt with ruffle trims in black	0	3	1	HKD$232.80	https://images.asos-media.com/products/boohoo-chiffon-midaxi-skirt-with-ruffle-trims-in-black/13462881-1-black?$n_480w$&wid=476&fit=constrain	Cancer
355	In The Style x Lorna Luxe extreme puff sleeve babydoll dress in white	0	0	1	HKD$423.99	https://images.asos-media.com/products/in-the-style-x-lorna-luxe-extreme-puff-sleeve-babydoll-dress-in-white/20791530-1-white?$XXL$&wid=513&fit=constrain	Leo
356	French Connection high neck mini skater dress	0	0	1	HKD$763.28	https://images.asos-media.com/products/french-connection-high-neck-mini-skater-dress/13925768-1-margotred?$XXL$&wid=513&fit=constrain	Taurus
357	Missguided tweed shift dress	0	0	1	HKD$253.97	https://images.asos-media.com/products/missguided-tweed-shift-dress/14291871-1-black?$XXL$&wid=513&fit=constrain	Sagittarius
358	Vero Moda Curve shift dress with tie sleeves in black	0	0	1	HKD$380.95	https://images.asos-media.com/products/vero-moda-curve-shift-dress-with-tie-sleeves-in-black/14816119-1-black?$XXL$&wid=513&fit=constrain	Aries
359	Monki midi belted shirt dress with pockets in rust	0	0	1	HKD$296.30	https://images.asos-media.com/products/monki-midi-belted-shirt-dress-with-pockets-in-rust/13382968-1-rust?$XXL$&wid=513&fit=constrain	Gemini
349	LOOKBOOK DESIGN Eivissa all over fringe drape halter neck midaxi dress	3	0	1	HKD$323.81	https://images.asos-media.com/products/asos-design-eivissa-all-over-fringe-drape-halter-neck-midaxi-dress/13596770-1-red?$XXL$&wid=513&fit=constrain	Capricorn
344	LOOKBOOK DESIGN lace midi dress with ladder trim detail	3	0	1	HKD$634.92	https://images.asos-media.com/products/asos-design-lace-midi-dress-with-ladder-trim-detail/13763107-1-mustard?$XXL$&wid=513&fit=constrain	Leo
360	adidas Originals three stripe bardot dress in red	0	0	1	HKD$370.37	https://images.asos-media.com/products/adidas-originals-three-stripe-bardot-dress-in-red/11711923-1-scarlet?$n_480w$&wid=476&fit=constrain	Capricorn
361	Wild Honey knitted tunic dress with pockets	0	0	1	HKD$359.79	https://images.asos-media.com/products/wild-honey-knitted-tunic-dress-with-pockets/12388116-1-camel?$n_480w$&wid=476&fit=constrain	Cancer
362	Boohoo one shoulder puff sleeve dress in blue	0	0	1	HKD$105.82	https://images.asos-media.com/products/boohoo-one-shoulder-puff-sleeve-dress-in-blue/20160931-1-blue?$XXL$&wid=513&fit=constrain	Scorpio
363	Glamorous silver metallic pointed heeled shoes	0	1	1	HKD$253.97	https://images.asos-media.com/products/glamorous-silver-metallic-pointed-heeled-shoes/11790095-1-silvermetallic?$n_480w$&wid=476&fit=constrain	Capricorn
364	River Island tassel loafer in burgundy	0	1	1	HKD$370.37	https://images.asos-media.com/products/river-island-tassel-loafer-in-burgundy/11971504-1-reddark?$n_480w$&wid=476&fit=constrain	Libra
365	Tommy Jeans critter print shirt in light blue	1	2	1	HKD$846.99	https://images.asos-media.com/products/tommy-jeans-critter-print-shirt-in-light-blue/20070622-1-moderateblue?$XXL$&wid=513&fit=constrain	Aquarius
366	In The Style x Lorna Luxe peplum hem open back top in white	1	2	1	HKD$317.99	https://images.asos-media.com/products/in-the-style-x-lorna-luxe-peplum-hem-open-back-top-in-white/20791524-1-white?$XXL$&wid=513&fit=constrain	Libra
367	In The Style x Lorna Luxe extreme puff sleeve top in black	1	2	1	HKD$317.35	https://images.asos-media.com/products/in-the-style-x-lorna-luxe-extreme-puff-sleeve-top-in-black/20791527-1-black?$XXL$&wid=513&fit=constrain	Libra
368	LOOKBOOK DESIGN sleeveless casual smock top	1	2	1	HKD$167.99	https://images.asos-media.com/products/asos-design-sleeveless-casual-smock-top/14573375-1-black?$XXL$&wid=513&fit=constrain	Gemini
369	LOOKBOOK DESIGN cowl neck all over sequin mini cami dress	3	0	1	HKD$133.33	https://images.asos-media.com/products/asos-design-cowl-neck-all-over-sequin-mini-cami-dress/12601711-1-navy?$XXL$&wid=513&fit=constrain	Pisces
370	LOOKBOOK DESIGN oversized t-shirt dress in mini leopard	1	0	1	HKD$232.99	https://images.asos-media.com/products/asos-design-oversized-t-shirt-dress-in-mini-leopard/20645635-1-leopardprint?$XXL$&wid=513&fit=constrain	Leo
371	Missguided shirred textured skater dress in mint	1	0	1	HKD$338.99	https://images.asos-media.com/products/missguided-shirred-textured-skater-dress-in-mint/20140690-1-mint?$XXL$&wid=513&fit=constrain	Cancer
372	LOOKBOOK DESIGN smart slim trouser in ponte	2	3	1	HKD$211.99	https://images.asos-media.com/products/asos-design-smart-slim-trouser-in-ponte/12958924-1-black?$XXL$&wid=513&fit=constrain	Scorpio
373	Mango elasticated tailored trouser co-ord in camel	2	3	1	HKD$342.33	//images.asos-media.com/products/mango-elasticated-tailored-trouser-co-ord-in-camel/20057572-1-brown?$XXL$&wid=513&fit=constrain	Sagittarius
374	Morgan textured print short in black	3	3	1	HKD$162.43	https://images.asos-media.com/products/morgan-textured-print-short-in-black/13658515-1-black?$XXL$&wid=513&fit=constrain	Cancer
375	LOOKBOOK DESIGN purple snake leather look shorts	3	3	1	HKD$142.85	https://images.asos-media.com/products/asos-design-purple-snake-leather-look-shorts/13542932-4?$XXL$&wid=513&fit=constrain	Leo
376	RAID Exclusive Harmoni loafers with square toe and gold snaffle in blush	2	1	1	HKD$264.99	https://images.asos-media.com/products/raid-exclusive-harmoni-loafers-with-square-toe-and-gold-snaffle-in-blush/14273299-1-blushpu?$XXL$&wid=513&fit=constrain	Aquarius
377	LOOKBOOK DESIGN Wide Fit Stirrup mid-heeled loafers in orange velvet	2	1	1	HKD$317.99	https://images.asos-media.com/products/asos-design-wide-fit-stirrup-mid-heeled-loafers-in-orange-velvet/13916354-1-orangevelvet?$XXL$&wid=513&fit=constrain	Sagittarius
378	Glamorous barely there heeled sandal in metallic gold snake	3	1	1	HKD$247.62	https://images.asos-media.com/products/glamorous-barely-there-heeled-sandal-in-metallic-gold-snake/13574945-1-lightgoldsnake?$XXL$&wid=513&fit=constrain	Aries
379	Miss Selfridge heeled sock boots in black	3	1	1	HKD$444.99	https://images.asos-media.com/products/miss-selfridge-heeled-sock-boots-in-black/14286933-1-black?$XXL$&wid=513&fit=constrain	Pisces
380	LOOKBOOK DESIGN suit in camel grid check	2	2	1	HKD$370.99	https://images.asos-media.com/groups/asos-design-suit-in-camel-grid-check/29709-group-1?$XXL$&wid=513&fit=constrain	Gemini
381	LOOKBOOK DESIGN linen sleeveless suit blazer	2	2	1	HKD$296.30	//images.asos-media.com/products/asos-design-linen-sleeveless-suit-blazer/13474598-1-neutral?$XXL$&wid=513&fit=constrain	Taurus
382	LOOKBOOK DESIGN cross over bardot top with long sleeve	3	2	1	HKD$190.99	https://images.asos-media.com/products/asos-design-cross-over-bardot-top-with-long-sleeve/12042142-1-black?$XXL$&wid=513&fit=constrain	Scorpio
383	Lasula gingham bralet co ord in multi	3	2	1	HKD$232.99	https://images.asos-media.com/products/lasula-gingham-bralet-co-ord-in-multi/14813850-1-multi?$XXL$&wid=513&fit=constrain	Sagittarius
190	LookBook DESIGN smart skinny oxford shirt with grandad collar in white	0	2	0	HKD$190.48	https://images.asos-media.com/products/asos-design-smart-skinny-oxford-shirt-with-grandad-collar-in-white/9109198-1-white?$n_480w$&wid=476&fit=constrain	Gemini
306	LookBook DESIGN regular slim pink marl smart shirt in pink	2	2	0	HKD$232.80	https://images.asos-media.com/products/asos-design-regular-slim-pink-marl-smart-shirt-in-pink/12031930-1-pink?$n_480w$&wid=476&fit=constrain	Pisces
387	Mauvais box logo t-shirt in pink	1	2	0	HKD$264.99	https://images.asos-media.com/products/mauvais-box-logo-t-shirt-in-pink/14941779-1-pink?$XXL$&wid=513&fit=constrain	Cancer
388	Avail London skinny fit suit jacket in camel	2	2	0	HKD$846.99	https://images.asos-media.com/products/avail-london-skinny-fit-suit-jacket-in-camel/14878419-1-tan?$XXL$&wid=513&fit=constrain	Scorpio
389	Burton Menswear slim suit jacket in grey & pink check	2	2	0	HKD$359.79	//images.asos-media.com/products/burton-menswear-slim-suit-jacket-in-grey-pink-check/13367590-1-grey?$XXL$&wid=513&fit=constrain	Sagittarius
384	Mauvais box logo t-shirt in pink	0	2	0	HKD$264.99	https://images.asos-media.com/products/mauvais-box-logo-t-shirt-in-pink/14941779-1-pink?$XXL$&wid=513&fit=constrain	Cancer
391	LookBook DESIGN skinny jeans in coloured zebra print	0	3	0	HKD$370.37	https://images.asos-media.com/products/asos-design-skinny-jeans-in-coloured-zebra-print/12054223-1-red?$n_480w$&wid=476&fit=constrain	Gemini
390	LookBook DESIGN super skinny jeans in tie dye	0	3	0	HKD$423.28	https://images.asos-media.com/products/asos-design-super-skinny-jeans-in-tie-dye/11522208-1-pink?$n_480w$&wid=476&fit=constrain	Aquarius
392	Nike cuffed Club jogger in grey BV2671-063	1	3	0	HKD$402.99	https://images.asos-media.com/products/nike-cuffed-club-jogger-in-grey-bv2671-063/12498114-1-grey?$XXL$&wid=513&fit=constrain	Aquarius
393	Levi's XX Chino slim fit trousers in olive green	1	3	0	HKD$687.99	https://images.asos-media.com/products/levis-xx-chino-slim-fit-trousers-in-olive-green/20418750-1-green?$XXL$&wid=513&fit=constrain	Capricorn
394	Burton Menswear slim suit trousers in grey & pink check	2	3	0	HKD$169.31	https://images.asos-media.com/products/burton-menswear-slim-suit-trousers-in-grey-pink-check/13367605-1-grey?$XXL$&wid=513&fit=constrain	Libra
395	Topman super skinny chinos in sage	3	3	0	HKD$237.57	https://images.asos-media.com/products/topman-super-skinny-chinos-in-sage/20983389-1-sage?$XXL$&wid=513&fit=constrain	Aquarius
396	SikSilk slim cropped trousers in navy pinstripe	3	3	0	HKD$423.28	https://images.asos-media.com/products/siksilk-slim-cropped-trousers-in-navy-pinstripe/13814360-1-navy?$XXL$&wid=513&fit=constrain	Capricorn
167	LookBook DESIGN wedding skinny suit jacket in stretch cotton in ice grey	0	0	0	HKD$740.74	https://images.asos-media.com/products/asos-design-wedding-skinny-suit-jacket-in-stretch-cotton-in-ice-grey/11280554-1-grey?$n_480w$&wid=476&fit=constrain	Leo
285	Selected Homme slim suit jacket with patch pockets in blue	2	0	0	HKD$1,269.84	https://images.asos-media.com/products/selected-homme-slim-suit-jacket-with-patch-pockets-in-blue/11983475-1-darkblue?$n_480w$&wid=476&fit=constrain	Aquarius
250	AllSaints tonic vest in light pink	1	2	0	HKD$211.64	https://images.asos-media.com/products/allsaints-tonic-vest-in-light-pink/13192773-1-pink?$n_480w$&wid=476&fit=constrain	Gemini
249	LookBook DESIGN oversized sleeveless t-shirt with vertical colour block	1	2	0	HKD$169.31	https://images.asos-media.com/products/asos-design-oversized-sleeveless-t-shirt-with-vertical-colour-block/12031933-1-navy?$n_480w$&wid=476&fit=constrain	Aquarius
385	LookBook DESIGN tank vest in rib with turtle zip neck in white	0	2	0	HKD$148.15	https://images.asos-media.com/products/asos-design-tank-vest-in-rib-with-turtle-zip-neck-in-white/12148915-1-white?$n_480w$&wid=476&fit=constrain	Leo
397	LookBook DESIGN festival regular fit shirt in neon snake print	3	0	0	HKD$190.48	https://images.asos-media.com/products/asos-design-festival-regular-fit-shirt-in-neon-snake-print/12247062-1-green?$n_480w$&wid=476&fit=constrain	Scorpio
398	ellesse Joli utility overhead reflective jacket in black	0	2	0	HKD$740.99	https://images.asos-media.com/products/ellesse-joli-utility-overhead-reflective-jacket-in-black-exclusive-at-asos/20124815-1-black?$XXL$&wid=513&fit=constrain	Scorpio
386	ellesse Joli utility overhead reflective jacket in black	1	2	0	HKD$740.99	https://images.asos-media.com/products/ellesse-joli-utility-overhead-reflective-jacket-in-black-exclusive-at-asos/20124815-1-black?$XXL$&wid=513&fit=constrain	Scorpio
399	LookBook DESIGN regular fit shirt with scribble face print in white	0	0	0	HKD$211.64	https://images.asos-media.com/products/asos-design-regular-fit-shirt-with-scribble-face-print-in-white/12621502-1-white?$n_480w$&wid=476&fit=constrain	Sagittarius
400	Jack & Jones Core logo tipped pique polo in black	1	0	0	HKD$232.99	https://images.asos-media.com/products/jack-jones-core-logo-tipped-pique-polo-in-black/13926429-1-black?$XXL$&wid=513&fit=constrain	Leo
401	New look short sleeve muscle fit poplin shirt in black	1	0	0	HKD$137.99	https://images.asos-media.com/products/new-look-short-sleeve-muscle-fit-poplin-shirt-in-black/14670163-1-black?$XXL$&wid=513&fit=constrain	Cancer
402	Twisted Tailor super skinny fit suit in burgundy check	2	0	0	HKD$920.90	https://images.asos-media.com/groups/twisted-tailor-super-skinny-fit-suit-in-burgundy-check/25679-group-1?$XXL$&wid=513&fit=constrain	Gemini
403	New Look skinny suit in dark green	2	0	0	HKD$740.53	https://images.asos-media.com/groups/new-look-skinny-suit-in-dark-green/26962-group-1?$XXL$&wid=513&fit=constrain	Taurus
404	LookBook DESIGN slim fit shirt in abstract paint stroke print	3	0	0	HKD$238.10	https://images.asos-media.com/products/asos-design-slim-fit-shirt-in-abstract-paint-stroke-print/14098464-1-white?$XXL$&wid=513&fit=constrain	Taurus
407	Birkenstock vegan gizah sandals in brown	1	1	0	HKD$687.99	https://images.asos-media.com/products/birkenstock-vegan-gizah-sandals-in-brown/13896423-1-brown?$XXL$&wid=513&fit=constrain	Libra
408	The North Face Skeena sandal in black	1	1	0	HKD$476.99	https://images.asos-media.com/products/the-north-face-skeena-sandal-in-black/14930821-1-tnfblacktnfblack?$XXL$&wid=513&fit=constrain	Virgo
405	LookBook DESIGN Wide Fit boat shoes in tan leather with gum sole	2	1	0	HKD$423.28	https://images.asos-media.com/products/asos-design-wide-fit-boat-shoes-in-tan-leather-with-gum-sole/9397535-1-tan?$n_480w$&wid=476&fit=constrain	Aries
406	Walk London jacob woven loafers in black leather	2	1	0	HKD$687.99	https://images.asos-media.com/products/walk-london-jacob-woven-loafers-in-black-leather/13901452-1-black?$XXL$&wid=513&fit=constrain	Capricorn
409	Birkenstock vegan gizah sandals in brown	0	1	0	HKD$687.99	https://images.asos-media.com/products/birkenstock-vegan-gizah-sandals-in-brown/13896423-1-brown?$XXL$&wid=513&fit=constrain	Libra
410	The North Face Skeena sandal in black	0	1	0	HKD$476.99	https://images.asos-media.com/products/the-north-face-skeena-sandal-in-black/14930821-1-tnfblacktnfblack?$XXL$&wid=513&fit=constrain	Virgo
411	LookBook DESIGN backless mule loafer in black faux leather with fringe and studding detail	3	1	0	HKD$370.99	https://images.asos-media.com/products/asos-design-backless-mule-loafer-in-black-faux-leather-with-fringe-and-studding-detail/12510374-1-black?$XXL$&wid=513&fit=constrain	Pisces
412	LookBook DESIGN loafers in black with baroque print	3	1	0	HKD$317.99	https://images.asos-media.com/products/asos-design-loafers-in-black-with-baroque-print/14040569-1-multi?$XXL$&wid=513&fit=constrain	Capricorn
413	LookBook DESIGN cuban heel western chelsea boots in black faux leather with metal hardware	3	1	0	HKD$476.99	https://images.asos-media.com/products/asos-design-cuban-heel-western-chelsea-boots-in-black-faux-leather-with-metal-hardware/13774772-1-black?$XXL$&wid=513&fit=constrain	Scorpio
414	LookBook DESIGN cuban heel western chelsea boots in black leather with buckle detail	3	1	0	HKD$370.37	https://images.asos-media.com/products/asos-design-cuban-heel-western-chelsea-boots-in-black-leather-with-buckle-detail/11165915-1-black?$XXL$&wid=513&fit=constrain	Sagittarius
415	New Look tie waist detail shirt dress in black	0	0	1	HKD$211.53	https://images.asos-media.com/products/new-look-tie-waist-detail-shirt-dress-in-black/12965229-1-black?$n_480w$&wid=476&fit=constrain	Libra
416	adidas Originals three stripe bardot dress in red	0	0	1	HKD$370.37	https://images.asos-media.com/products/adidas-originals-three-stripe-bardot-dress-in-red/11711923-1-scarlet?$n_480w$&wid=476&fit=constrain	Aquarius
417	Puma Classics black bodycon dress	0	0	1	HKD$423.28	https://images.asos-media.com/products/puma-classics-black-bodycon-dress/12076714-1-pumablack?$n_480w$&wid=476&fit=constrain	Pisces
\.


--
-- Data for Name: horoscope; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.horoscope (id, horoscope) FROM stdin;
1	Aries
2	Taurus
3	Gemini
4	Cancer
5	Leo
6	Virgo
7	Libra
8	Scorpio
9	Sagittarius
10	Capricorn
11	Aquarius
12	Pisces
\.


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
1	20200806183232_create-tables.js	1	2020-08-07 22:18:35.049+08
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: orderhistory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orderhistory (orderhistory_id, userstable_id, clothes_id, price, quantity, size, total, order_date) FROM stdin;
\.


--
-- Data for Name: userstable; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.userstable (id, name, password, horoscope, email) FROM stdin;
27	tester2	$2b$10$.U/L4BiIcqmeWDhUvo638.jWLlzLLAm/KAksgUYe3CZcUpIPJaXTC	Capricorn	tester2@gmail.com
\.


--
-- Name: cart_cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cart_cart_id_seq', 4, true);


--
-- Name: clothes_clothes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clothes_clothes_id_seq', 1, false);


--
-- Name: horoscope_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.horoscope_id_seq', 1, false);


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 1, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: orderhistory_orderhistory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orderhistory_orderhistory_id_seq', 1, false);


--
-- Name: userstable_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.userstable_id_seq', 27, true);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cart_id);


--
-- Name: clothes clothes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clothes
    ADD CONSTRAINT clothes_pkey PRIMARY KEY (clothes_id);


--
-- Name: horoscope horoscope_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.horoscope
    ADD CONSTRAINT horoscope_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: orderhistory orderhistory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orderhistory
    ADD CONSTRAINT orderhistory_pkey PRIMARY KEY (orderhistory_id);


--
-- Name: userstable userstable_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userstable
    ADD CONSTRAINT userstable_email_unique UNIQUE (email);


--
-- Name: userstable userstable_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userstable
    ADD CONSTRAINT userstable_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

