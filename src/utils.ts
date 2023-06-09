import { LoyaltyUser } from "./enums";
import { Review } from "./interface";

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement;
const displayUser = document.querySelector("#user") as HTMLElement;

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    " review" +
    makeMultiple(value) +
    "  last review by" +
    " ";
  reviewer + iconDisplay;
}

export function populatedUser(userName: string, isReturning: boolean) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  displayUser.innerHTML = userName;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
