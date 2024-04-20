import React, { useState, useEffect, Suspense, lazy, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "./layouts/Layout";
import {
  LoadingCardSmall,
  LoadingCard,
  LoadingPage,
} from "./components/Loading";

import {
  Episodes,
  EpisodesOnEpisode,
} from "./components/Episodes";

import BackBtn from "./components/BackBtn";
import AnimeDetail from "./components/AnimeDetail";
import StreamServices from "./components/StreamServices";

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";
import SmallCard from "./components/SmallCard";
import OngoingAnimes from "./components/OngoingAnimes";

import Home from "./pages/Home";
import Ongoing from "./pages/Ongoing";
import Anime from "./pages/Anime";
import AnimeByGenre from "./pages/AnimeByGenre";
import Episode from "./pages/Episode";

export {
  EpisodesOnEpisode,
  StreamServices,
  AnimeDetail,
  Episodes,
  Anime,
  Episode,
  AnimeByGenre,
  LoadingPage,
  LoadingCard,
  useMemo,
  BackBtn,
  Ongoing,
  lazy,
  InfiniteScroll,
  LoadingCardSmall,
  Genres,
  SmallCard,
  Navbar,
  Card,
  Layout,
  Home,
  useState,
  OngoingAnimes,
  useEffect,
  Suspense,
  Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
};
