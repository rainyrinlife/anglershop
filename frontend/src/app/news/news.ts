import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: `news.html`,
  styleUrl: "./news.css"
})
export class News {
  news = [
    { date: "2024-01-15", content: "Winter Fly Fishing Workshop - Master advanced fly casting techniques in cold water conditions. Register now for February sessions at Lake Superior. Limited spots available!" },
    { date: "2024-01-10", content: "New Product Launch: Premium Carbon Fiber Rods - Experience superior strength and sensitivity with our latest collection. Available in-store and online starting this week." },
    { date: "2023-12-20", content: "Holiday Sale Extended - Get 30% off all tackle and gear through January 5th. Perfect time to upgrade your fishing equipment before spring season!" },
    { date: "2023-12-05", content: "Knot Tying Masterclass Success - Over 50 anglers joined our December workshop. Thank you all for participating! Next session scheduled for January 25th." },
    { date: "2023-11-18", content: "Beginner's Guide Published - Our comprehensive fishing guide is now available. Download free tips on equipment selection, safety, and basic techniques." },
    { date: "2023-10-01", content: "Stay tuned for the latest news and updates about our fishing workshops, events, and special offers. We are committed to providing you with the best fishing experience possible. Check back often for new articles, tips, and stories from the fishing community!" },
    { date: "2023-09-15", content: "We're excited to announce our upcoming fishing workshop series. Join us for hands-on learning experiences with expert guides." },
    { date: "2023-08-20", content: "Our new line of fishing gear is now available in all our stores. Get ready to catch more fish with our premium equipment." }
  ];
}
