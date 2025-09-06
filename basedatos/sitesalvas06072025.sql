--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-09-06 13:05:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16402)
-- Name: medico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medico (
    idmedico integer NOT NULL,
    nombres character varying(100) NOT NULL,
    especialidad character varying(200) NOT NULL,
    telefono character varying(10) NOT NULL,
    correo character varying(200) NOT NULL,
    direccion character varying(200)
);


ALTER TABLE public.medico OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16401)
-- Name: medico_idmedico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.medico_idmedico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.medico_idmedico_seq OWNER TO postgres;

--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 217
-- Name: medico_idmedico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.medico_idmedico_seq OWNED BY public.medico.idmedico;


--
-- TOC entry 220 (class 1259 OID 16416)
-- Name: paciente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paciente (
    idpaciente integer NOT NULL,
    documento character varying(10) NOT NULL,
    nombres character varying(100) NOT NULL,
    telefono character varying(10) NOT NULL,
    correo character varying(200) NOT NULL,
    direccion character varying(200)
);


ALTER TABLE public.paciente OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16415)
-- Name: paciente_idpaciente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paciente_idpaciente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.paciente_idpaciente_seq OWNER TO postgres;

--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 219
-- Name: paciente_idpaciente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paciente_idpaciente_seq OWNED BY public.paciente.idpaciente;


--
-- TOC entry 4747 (class 2604 OID 16405)
-- Name: medico idmedico; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medico ALTER COLUMN idmedico SET DEFAULT nextval('public.medico_idmedico_seq'::regclass);


--
-- TOC entry 4748 (class 2604 OID 16419)
-- Name: paciente idpaciente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paciente ALTER COLUMN idpaciente SET DEFAULT nextval('public.paciente_idpaciente_seq'::regclass);


--
-- TOC entry 4907 (class 0 OID 16402)
-- Dependencies: 218
-- Data for Name: medico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.medico (idmedico, nombres, especialidad, telefono, correo, direccion) FROM stdin;
1	Pepito Perez Perez	Neurocirujano	3012222221	pepito@sitesalvas.com	avenida siempre viva
3	Juanito Alimaña	Ginecologo	3011111133	juanito@sitesalvas.com	avenida siempre viva
2	Pedro Navaja Navaja	Cirujano Gastrico	3012222222	pedrito@sitesalvas.com	avenida siempre viva
\.


--
-- TOC entry 4909 (class 0 OID 16416)
-- Dependencies: 220
-- Data for Name: paciente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paciente (idpaciente, documento, nombres, telefono, correo, direccion) FROM stdin;
1	101	Pepito Perez Perez	300	pepito@gmail.com	avenida siempre viva
2	102	fulanito Perez Perez	301	fulanito@gmail.com	avenida siempre viva
3	201	Pedro Navaja	303	pedro@gmail.com	avenida siempre viva
4	202	Juanito Alimaña	304	juanito@gmail.com	avenida siempre viva
5	300	fulanito guayando guayando	305	fulanitog@gmail.com	calle siempre viva
\.


--
-- TOC entry 4917 (class 0 OID 0)
-- Dependencies: 217
-- Name: medico_idmedico_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.medico_idmedico_seq', 3, true);


--
-- TOC entry 4918 (class 0 OID 0)
-- Dependencies: 219
-- Name: paciente_idpaciente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paciente_idpaciente_seq', 5, true);


--
-- TOC entry 4750 (class 2606 OID 16413)
-- Name: medico medico_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_correo_key UNIQUE (correo);


--
-- TOC entry 4752 (class 2606 OID 16409)
-- Name: medico medico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_pkey PRIMARY KEY (idmedico);


--
-- TOC entry 4754 (class 2606 OID 16411)
-- Name: medico medico_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_telefono_key UNIQUE (telefono);


--
-- TOC entry 4756 (class 2606 OID 16427)
-- Name: paciente paciente_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_correo_key UNIQUE (correo);


--
-- TOC entry 4758 (class 2606 OID 16423)
-- Name: paciente paciente_documento_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_documento_key UNIQUE (documento);


--
-- TOC entry 4760 (class 2606 OID 16425)
-- Name: paciente paciente_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_telefono_key UNIQUE (telefono);


-- Completed on 2025-09-06 13:05:37

--
-- PostgreSQL database dump complete
--

